import pandas as pd
import os
import re
from collections import defaultdict
from openai import AsyncOpenAI
from dotenv import load_dotenv
import json
from typing import List, Dict, Any
import csv
import asyncio
import time

# Load environment variables
load_dotenv()

# Initialize OpenAI async client
client = AsyncOpenAI(api_key=os.getenv('OPENAI_API_KEY'))

# Path to the Excel file and CSV mapping
EXCEL_FILE = 'CCDS Module Review 24_25(1-53).xlsx'
CSV_MAPPING_FILE = 'SCDS Academics Page Status(Sheet2).csv'

# Semaphore to limit concurrent requests (adjust based on your rate limits)
# For gpt-4o-mini, start with 5 concurrent requests
REQUEST_SEMAPHORE = asyncio.Semaphore(5)

def load_course_titles():
    """Load course code to title mapping from CSV file"""
    course_map = {}
    
    # Try different encodings
    encodings = ['utf-8', 'latin-1', 'cp1252', 'ISO-8859-1']
    
    for encoding in encodings:
        try:
            print(f"Trying to read CSV with {encoding} encoding...")
            with open(CSV_MAPPING_FILE, 'r', encoding=encoding) as file:
                reader = csv.DictReader(file)
                for row in reader:
                    code = row.get('Course Code', '').strip()
                    title = row.get('Module', '').strip()
                    if code and title:
                        course_map[code.upper()] = title
            print(f"Successfully loaded {len(course_map)} course titles from CSV with {encoding} encoding!")
            break  # Exit the loop if successful
        except UnicodeDecodeError:
            print(f"Failed to read CSV with {encoding} encoding.")
        except Exception as e:
            print(f"Error reading CSV with {encoding} encoding: {e}")
    
    if not course_map:
        print("Warning: Could not load course titles from CSV with any encoding.")
    
    return course_map

def get_initials(name):
    """Extract initials from full name"""
    if pd.isna(name) or name == '':
        return "Anonymous"
    
    words = name.strip().split()
    initials = ''.join([word[0] for word in words if word])
    return initials

def extract_course_code(code_string):
    """Extract just the course code (e.g., SC4001) from a string"""
    if pd.isna(code_string) or code_string == '':
        return None
    
    # Match course codes like SC4001, MH2500, etc.
    match = re.search(r'([A-Z]{2}\d{4})', str(code_string), re.IGNORECASE)
    if match:
        return match.group(1).upper()
    
    # If it doesn't match the pattern but has digits, use it as is
    if any(c.isdigit() for c in str(code_string)):
        return str(code_string).strip().upper()
    
    return None

def get_level_folder(course_code):
    """Determine which level folder the course belongs to based on code"""
    if not course_code:
        return None
    
    # Look for any digit in the string and use the first one as the level
    for char in str(course_code):
        if char.isdigit():
            return f"Level {char}"
    
    return None

def parse_rating(rating_value):
    """Extract numeric rating from values like '5 (highest)' or '1 (lowest)'"""
    if pd.isna(rating_value) or rating_value == '':
        return 0
    
    # If it's already a number, return it
    if isinstance(rating_value, (int, float)):
        return int(rating_value)
    
    # Try to extract the numeric part from strings like "5 (highest)"
    match = re.search(r'(\d+)', str(rating_value))
    if match:
        return int(match.group(1))
    
    return 0

def safe_str(value):
    """Convert any value to string safely"""
    if pd.isna(value):
        return ""
    return str(value)

def calculate_average_ratings(reviews: List[Dict[str, Any]]) -> Dict[str, int]:
    """Calculate average ratings from multiple reviews"""
    rating_keys = ['lecture_clarity', 'content_relevance', 'content_difficulty', 'overall_workload', 'team_dependency']
    averages = {}
    
    for key in rating_keys:
        values = [review[key] for review in reviews if review[key] > 0]
        if values:
            averages[key] = round(sum(values) / len(values))
        else:
            averages[key] = 0
    
    return averages

def has_list_format(text: str) -> bool:
    """Check if text contains list formatting (numbered lists, bullet points, etc.)"""
    if not text:
        return False
    
    # Check for numbered lists (1., 2., etc.)
    numbered_list = re.search(r'\d+\.\s+', text)
    
    # Check for bullet points
    bullet_points = re.search(r'[•\-\*]\s+', text)
    
    # Check for multiple line breaks indicating list structure
    multiple_lines = len([line.strip() for line in text.split('\n') if line.strip()]) > 2
    
    return bool(numbered_list or bullet_points or multiple_lines)

async def call_gpt4(prompt: str, system_message: str = None) -> str:
    """Call GPT-4 API with the given prompt, with semaphore rate limiting"""
    async with REQUEST_SEMAPHORE:  # Limit concurrent requests
        max_retries = 3
        base_delay = 1  # Reduced since we're using semaphore
        
        for attempt in range(max_retries):
            try:
                # Small delay to avoid overwhelming the API
                if attempt > 0:
                    delay = base_delay * (2 ** attempt)  # Exponential backoff
                    print(f"Waiting {delay} seconds before retry {attempt}...")
                    await asyncio.sleep(delay)
                
                messages = []
                if system_message:
                    messages.append({"role": "system", "content": system_message})
                messages.append({"role": "user", "content": prompt})
                
                response = await client.chat.completions.create(
                    model="gpt-4.1-mini",
                    messages=messages,
                    max_tokens=2000,
                    temperature=0.3
                )
                
                return response.choices[0].message.content.strip()
                
            except Exception as e:
                error_str = str(e)
                if "rate_limit_exceeded" in error_str:
                    if attempt < max_retries - 1:
                        wait_time = 30 * (attempt + 1)  # Reduced wait times: 30s, 60s, 90s
                        print(f"Rate limit exceeded. Waiting {wait_time} seconds before retry...")
                        await asyncio.sleep(wait_time)
                        continue
                    else:
                        print(f"Rate limit exceeded after {max_retries} retries. Skipping this review.")
                        return ""
                else:
                    print(f"Error calling GPT-4: {e}")
                    return ""
        
        return ""

async def merge_multiple_reviews(reviews: List[Dict[str, Any]], course_code: str) -> Dict[str, str]:
    """Use GPT-4 to merge multiple reviews into a comprehensive  single review"""
    
    # Check if any review has list formatting in course summary
    has_lists = any(has_list_format(review['course_summary']) for review in reviews)
    list_instruction = "\n10. If any of the original reviews use numbered lists or bullet points in the Course Summary, preserve that formatting in the merged version." if has_lists else ""
    
    # Prepare the reviews data for GPT
    reviews_text = []
    for i, review in enumerate(reviews, 1):
        review_text = f"""
Review {i} (by {review['author']}):
Course Summary: {review['course_summary']}
Workload: {review['course_workload']}
Projects: {review['projects']}
Tips: {review['tips']}
Ratings - Lecture Clarity: {review['lecture_clarity']}/5, Content Relevance: {review['content_relevance']}/5, Difficulty: {review['content_difficulty']}/5, Workload: {review['overall_workload']}/5, Team Dependency: {review['team_dependency']}/5
"""
        reviews_text.append(review_text)
    
    combined_reviews = "\n".join(reviews_text)
    
    system_message = f"""You are an expert academic content curator. Your task is to merge multiple student reviews of the same university module into a single, comprehensive, and well-structured review. 

Guidelines:
1. Combine insights from all reviews while maintaining authenticity
2. Resolve any conflicting information by presenting balanced perspectives
3. Keep the tone academic but accessible
4. Maintain the structure: Course Summary, Workload, Projects, Tips to Do Well
5. Don't add information not present in the original reviews
6. If reviews have conflicting viewpoints, acknowledge both perspectives
7. Write in a way that feels like a well-crafted student review, not AI-generated content
8. Keep each section concise but informative
9. Use natural, student-like language{list_instruction}"""

    prompt = f"""Please merge the following {len(reviews)} student reviews for course {course_code} into a single comprehensive review. The merged review should capture the essence of all individual reviews while being well-structured and coherent.

{combined_reviews}

Please provide the merged content in this exact format:

Course Summary:
[Your merged course summary here]

Workload:
[Your merged workload description here]

Projects:
[Your merged projects description here]

Tips to Do Well:
[Your merged tips here]"""

    merged_content = await call_gpt4(prompt, system_message)
    
    # Parse the response into sections
    sections = {}
    current_section = None
    current_content = []
    
    for line in merged_content.split('\n'):
        line = line.strip()
        if line.endswith(':') and line[:-1] in ['Course Summary', 'Workload', 'Projects', 'Tips to Do Well']:
            if current_section:
                sections[current_section] = '\n'.join(current_content).strip()
            current_section = line[:-1]
            current_content = []
        elif current_section and line:
            current_content.append(line)
    
    # Add the last section
    if current_section:
        sections[current_section] = '\n'.join(current_content).strip()
    
    return {
        'course_summary': sections.get('Course Summary', ''),
        'course_workload': sections.get('Workload', ''),
        'projects': sections.get('Projects', ''),
        'tips': sections.get('Tips to Do Well', '')
    }

async def improve_single_review(review: Dict[str, Any], course_code: str) -> Dict[str, str]:
    """Use GPT-4 to improve grammar and wording of a single review"""
    
    # Check if course summary has list formatting
    has_lists = has_list_format(review['course_summary'])
    list_instruction = "\n8. Preserve any numbered lists or bullet points in the Course Summary exactly as they are." if has_lists else ""
    
    system_message = f"""You are an expert editor helping to improve student-written university module reviews. Your task is to enhance grammar, clarity, and flow while preserving the original content, meaning, and student voice.

Guidelines:
1. Fix grammar, spelling, and punctuation errors
2. Improve sentence structure and flow
3. Maintain the original content - don't add new information
4. Keep the authentic student voice and perspective
5. Ensure clarity and readability
6. Don't make the content sound overly formal or AI-generated
7. Preserve specific details, examples, and personal experiences mentioned{list_instruction}"""

    original_content = f"""
Course Summary: {review['course_summary']}
Workload: {review['course_workload']}
Projects: {review['projects']}
Tips: {review['tips']}
"""

    prompt = f"""Please improve the grammar, clarity, and flow of this student review for course {course_code}. Keep all the original information and maintain the student's authentic voice.

Original review:
{original_content}

Please provide the improved content in this exact format:

Course Summary:
[Improved course summary here]

Workload:
[Improved workload description here]

Projects:
[Improved projects description here]

Tips to Do Well:
[Improved tips here]"""

    improved_content = await call_gpt4(prompt, system_message)
    
    # Parse the response into sections
    sections = {}
    current_section = None
    current_content = []
    
    for line in improved_content.split('\n'):
        line = line.strip()
        if line.endswith(':') and line[:-1] in ['Course Summary', 'Workload', 'Projects', 'Tips to Do Well']:
            if current_section:
                sections[current_section] = '\n'.join(current_content).strip()
            current_section = line[:-1]
            current_content = []
        elif current_section and line:
            current_content.append(line)
    
    # Add the last section
    if current_section:
        sections[current_section] = '\n'.join(current_content).strip()
    
    return {
        'course_summary': sections.get('Course Summary', review['course_summary']),
        'course_workload': sections.get('Workload', review['course_workload']),
        'projects': sections.get('Projects', review['projects']),
        'tips': sections.get('Tips to Do Well', review['tips'])
    }

async def process_reviews_data():
    """Read Excel file and group reviews by course code"""
    try:
        df = pd.read_excel(EXCEL_FILE)
        print(f"Successfully loaded {len(df)} rows from {EXCEL_FILE}")
        
        # Group reviews by course code
        reviews_by_course = defaultdict(list)
        
        for _, row in df.iterrows():
            course_code_full = row.get('Course Code', '')
            course_code = extract_course_code(course_code_full)
            
            if not course_code:
                print(f"Skipping row with invalid course code: {course_code_full}")
                continue
            
            # Parse all the review data
            review_data = {
                'author': get_initials(row.get('Name (as in matriculation card)', '')),
                'course_code': course_code,
                'lecture_clarity': parse_rating(row.get('Lecture Clarity', 0)),
                'content_relevance': parse_rating(row.get('Content Relevance', 0)),
                'content_difficulty': parse_rating(row.get('Content Difficulty', 0)),
                'overall_workload': parse_rating(row.get('Overall Workload', 0)),
                'team_dependency': parse_rating(row.get('Team Dependency', 0)),
                'course_summary': safe_str(row.get('Course Summary', '')).strip(),
                'course_workload': safe_str(row.get('Course Workload', '')).strip(),
                'projects': safe_str(row.get('Projects and Assignments', '')).strip(),
                'tips': safe_str(row.get('Tips to Do Well\xa0', '')).strip()  # Fixed column name with non-breaking space
            }
            
            reviews_by_course[course_code].append(review_data)
        
        return reviews_by_course
    
    except Exception as e:
        print(f"Error processing Excel file: {e}")
        return {}

async def create_markdown_file(course_code: str, reviews: List[Dict[str, Any]], course_titles: Dict[str, str]):
    """Create a markdown file for a module review (single or merged)"""
    
    level_folder = get_level_folder(course_code)
    if not level_folder:
        print(f"Could not determine level folder for course code: {course_code}")
        return
    
    # Ensure the target directory exists
    target_dir = os.path.join(level_folder, '')
    os.makedirs(target_dir, exist_ok=True)
    
    # Create filename
    course_code_lower = course_code.lower()
    filename = f"{target_dir}/{course_code_lower}.md"
    
    # Get course title from mapping
    course_title = course_titles.get(course_code, '')
    title_with_name = f"{course_code} - {course_title}" if course_title else course_code
    
    # Calculate average ratings
    avg_ratings = calculate_average_ratings(reviews)
    
    # Process content based on number of reviews
    if len(reviews) == 1:
        print(f"Improving single review for {course_code}...")
        improved_content = await improve_single_review(reviews[0], course_code)
        attribution = f"*Written by {reviews[0]['author']}*"
    else:
        print(f"Merging {len(reviews)} reviews for {course_code}...")
        improved_content = await merge_multiple_reviews(reviews, course_code)
        authors = [review['author'] for review in reviews]
        attribution = f"*Based on reviews by {', '.join(authors)}*"
    
    # Create markdown content
    content = f"""---
id: {course_code_lower}
sidebar_position: 4
title: {title_with_name}
---

import ModuleRatingsSummary from '@site/src/components/ModuleRatingsSummary';

<ModuleRatingsSummary 
  lectureClarity={{{avg_ratings['lecture_clarity']}}}
  contentRelevance={{{avg_ratings['content_relevance']}}}
  contentDifficulty={{{avg_ratings['content_difficulty']}}}
  overallWorkload={{{avg_ratings['overall_workload']}}}
  teamDependency={{{avg_ratings['team_dependency']}}}
/>

## Course Summary

{improved_content['course_summary']}

## Workload

{improved_content['course_workload']}

## Projects

{improved_content['projects']}

## Tips to Do Well

{improved_content['tips']}

{attribution}
"""
    
    # Write the content to the file
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Created review file: {filename}")

async def main():
    # Check if API key is available
    if not os.getenv('OPENAI_API_KEY'):
        print("Error: OPENAI_API_KEY not found in environment variables.")
        print("Please create a .env file in the root directory with your OpenAI API key:")
        print("OPENAI_API_KEY=your_api_key_here")
        return
    
    # Load course titles
    course_titles = load_course_titles()
    
    print("Processing reviews data...")
    reviews_by_course = await process_reviews_data()
    
    if not reviews_by_course:
        print("No valid reviews found to process.")
        return
    
    print(f"Found reviews for {len(reviews_by_course)} courses")
    
    # Create tasks for concurrent processing
    tasks = []
    for course_code, reviews in reviews_by_course.items():
        print(f"Queuing {course_code} ({len(reviews)} review{'s' if len(reviews) > 1 else ''})...")
        task = create_markdown_file(course_code, reviews, course_titles)
        tasks.append(task)
    
    # Process all courses concurrently with semaphore controlling the rate
    try:
        await asyncio.gather(*tasks, return_exceptions=True)
    except Exception as e:
        print(f"Error during concurrent processing: {e}")
    
    print("\nFinished processing all reviews!")

if __name__ == "__main__":
    asyncio.run(main()) 