import pandas as pd
import os
import re

# Path to the Excel file
EXCEL_FILE = 'CCDS Module Review 24_25(1-53).xlsx'

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
    
    # Simplified approach: look for any digit in the string
    # and use the first one as the level
    for char in str(course_code):
        if char.isdigit():
            return f"Level {char}"
    
    # If no digit found, skip this code
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

def create_markdown_file(row):
    """Create a markdown file for a module review"""
    name = row.get('Name (as in matriculation card)', '')
    course_code_full = row.get('Course Code', '')
    
    course_code = extract_course_code(course_code_full)
    if not course_code:
        print(f"Skipping row with invalid course code: {course_code_full}")
        return
    
    level_folder = get_level_folder(course_code)
    if not level_folder:
        print(f"Could not determine level folder for course code: {course_code}")
        return
    
    # Ensure the target directory exists
    target_dir = os.path.join(level_folder, '')
    os.makedirs(target_dir, exist_ok=True)
    
    # Create slugified filename with dashes for better URLs
    course_code_lower = course_code.lower()
    # Create a slug from the course code (e.g., sc4001 -> sc4001-neural-networks)
    slug = course_code_lower
    filename = f"{target_dir}/{slug}.md"
    
    # Get ratings - parse to handle text annotations
    lecture_clarity = parse_rating(row.get('Lecture Clarity', 0))
    content_relevance = parse_rating(row.get('Content Relevance', 0))
    content_difficulty = parse_rating(row.get('Content Difficulty', 0))
    overall_workload = parse_rating(row.get('Overall Workload', 0))
    team_dependency = parse_rating(row.get('Team Dependency', 0))
    
    # Get content sections - convert to string first
    course_summary = safe_str(row.get('Course Summary', '')).strip()
    course_workload = safe_str(row.get('Course Workload', '')).strip()
    projects = safe_str(row.get('Projects and Assignments', '')).strip()
    tips = safe_str(row.get('Tips to Do Well', '')).strip()
    
    # Get author initials
    initials = get_initials(name)
    
    # Create markdown content - with proper JSX syntax for attributes
    content = f"""---
id: {course_code_lower}
sidebar_position: 4
title: {course_code}
---

import ModuleRatingsSummary from '@site/src/components/ModuleRatingsSummary';

<ModuleRatingsSummary 
  lectureClarity={{{lecture_clarity}}}
  contentRelevance={{{content_relevance}}}
  contentDifficulty={{{content_difficulty}}}
  overallWorkload={{{overall_workload}}}
  teamDependency={{{team_dependency}}}
/>

## Course Summary

{course_summary}

## Workload

{course_workload}

## Projects

{projects}

## Tips to Do Well

{tips}

*Written by {initials}*
"""
    
    # Write the content to the file
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Created review file: {filename}")

def main():
    # Read the Excel file
    try:
        df = pd.read_excel(EXCEL_FILE)
        print(f"Successfully loaded {len(df)} rows from {EXCEL_FILE}")
        
        # Process each row
        for _, row in df.iterrows():
            try:
                create_markdown_file(row)
            except Exception as e:
                print(f"Error processing row: {e}")
            
        print("Finished processing all rows")
    except Exception as e:
        print(f"Error processing Excel file: {e}")

if __name__ == "__main__":
    main()
