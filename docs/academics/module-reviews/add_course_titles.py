import os
import csv
import re
import codecs

# Path to the CSV file with course information
CSV_FILE = 'SCDS Academics Page Status(Sheet2).csv'

# Paths to level directories
LEVEL_DIRS = ['Level 1', 'Level 2', 'Level 3', 'Level 4']

def read_course_titles():
    """Read the CSV file and create a mapping of course codes to titles"""
    course_map = {}
    
    # Try different encodings
    encodings = ['utf-8', 'latin-1', 'cp1252', 'ISO-8859-1']
    
    for encoding in encodings:
        try:
            print(f"Trying to read CSV with {encoding} encoding...")
            with codecs.open(CSV_FILE, 'r', encoding=encoding) as file:
                reader = csv.DictReader(file)
                for row in reader:
                    code = row.get('Course Code', '').strip()
                    title = row.get('Module', '').strip()
                    if code and title:
                        # Store both uppercase and lowercase versions for easier lookup
                        course_map[code.upper()] = title
                        course_map[code.lower()] = title
            print(f"Successfully read CSV with {encoding} encoding!")
            break  # Exit the loop if successful
        except UnicodeDecodeError:
            print(f"Failed to read CSV with {encoding} encoding.")
        except Exception as e:
            print(f"Error reading CSV with {encoding} encoding: {e}")
    
    if not course_map:
        print("Error: Could not read the CSV file with any of the attempted encodings.")
    
    return course_map

def update_markdown_files(course_map):
    """Update all markdown files with course titles"""
    updated_count = 0
    
    for level_dir in LEVEL_DIRS:
        level_path = os.path.join(os.getcwd(), level_dir)
        if not os.path.exists(level_path):
            print(f"Warning: Directory {level_path} not found. Skipping...")
            continue
        
        for filename in os.listdir(level_path):
            if not filename.endswith('.md'):
                continue
            
            file_path = os.path.join(level_path, filename)
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()
            
            # Check if the title already includes a dash (might already have the course title)
            title_line_match = re.search(r'title:\s*([^\n]+)', content)
            if not title_line_match:
                print(f"Warning: Could not find title line in {file_path}. Skipping...")
                continue
                
            title_line = title_line_match.group(1).strip()
            
            # Extract just the course code from the beginning of the title
            course_code_match = re.match(r'([A-Za-z]{2}\d{4})', title_line)
            if not course_code_match:
                print(f"Warning: Could not find valid course code in title for {file_path}. Skipping...")
                continue
            
            course_code = course_code_match.group(1).strip()
            
            # Check if the title already contains the course title (after a dash)
            if " - " in title_line:
                print(f"Note: {file_path} already has a title with dash format. Checking if it matches...")
                # We only update if the current title doesn't match what's in the CSV
                existing_title = title_line.split(" - ", 1)[1].strip()
                if course_code.upper() in course_map and existing_title == course_map[course_code.upper()]:
                    print(f"Skipping {file_path} as it already has the correct title.")
                    continue
            
            # Get the original case from the file for consistency
            original_case = course_code
            
            # Try to find the course in our map (case insensitive)
            if course_code.upper() in course_map:
                # Use the title corresponding to the uppercase version
                course_title = course_map[course_code.upper()]
                
                # Update the title field with course code and title
                new_title = f"title: {original_case} - {course_title}"
                # Replace the entire title line
                updated_content = re.sub(r'title:\s*[^\n]+', new_title, content)
                
                # Write the updated content back to the file
                with open(file_path, 'w', encoding='utf-8') as file:
                    file.write(updated_content)
                
                updated_count += 1
                print(f"Updated {file_path} with title: {original_case} - {course_title}")
            else:
                print(f"Warning: Course code {course_code} not found in CSV. Skipping...")
    
    return updated_count

def manual_course_map():
    """Create a manual mapping from the attached CSV content in case file reading fails"""
    course_map = {}
    
    # Manually copied from the visible part of the CSV
    courses = [
        ("SC1003", "Introduction to Computational Thinking & Programming"),
        ("SC1004", "Linear Algebra for Computing"),
        ("SC1005", "Digital Logic"),
        ("SC1006", "Computer Organisation and Architecture"),
        ("SC1007", "Data Structures & Algorithms"),
        ("SC1008", "C and C++ Programming"),
        ("SC1013", "Physics for Computing"),
        ("MH1805", "Calculus (Calculus I and II)"),
        ("MH1812", "Discrete Mathematics"),
        ("SC2000", "Probability and Statistics for Computing"),
        ("SC2001", "Algorithm Design and Analysis"),
        ("SC2002", "Object-oriented Design and Programming"),
        ("SC2005", "Operating Systems"),
        ("SC2006", "Software Engineering"),
        ("SC2008", "Computer Networks"),
        ("SC2079", "Multidisciplinary Design Project"),
        ("SC2103", "Digital Systems Design"),
        ("SC2104", "Sensors, Interfacing & Digital Control"),
        ("SC2107", "Microprocessor-based System Design"),
        ("SC2203", "Automata. Computability and Complexity"),
        ("SC2207", "Introduction to Database Systems"),
        ("MH2100", "Calculus III"),
        ("MH2500", "Probability and Introduction to Statistics"),
        ("MH2802", "Linear Algebra for Scientists"),
        ("SC3000", "Artificial Intelligence"),
        ("SC3010", "Computer Security"),
        ("SC3020", "Database System Principles"),
        ("SC3021", "Data Science Fundamentals (Only for U24 and after)"),
        ("SC3030", "Advanced Computer Networks"),
        ("SC3040", "Advanced Software Engineering"),
        ("SC3050", "Advanced Computer Architecture"),
        ("SC3060", "Computer Graphics and Visualization"),
        ("SC3061", "Human-Computer Interaction"),
        ("SC3102", "Signal, Systems, Transforms"),
        ("SC3103", "Embedded Programming"),
        ("MH3500", "Statistics"),
        ("MH3510", "Regression Analysis"),
        ("MH3511", "Data Analysis with Computer"),
        ("MH3701", "Basic Optimization"),
        ("SC4000", "Machine Learning"),
        ("SC4001", "Neural Networks and Deep Learning"),
        ("SC4002", "Natural Language Processing"),
        ("SC4003", "Intelligent Agents"),
        ("SC4010", "Applied Cryptography"),
        ("SC4011", "Security Management"),
        ("SC4012", "Software Security"),
        ("SC4013", "Application Security"),
        ("SC4014", "Concepts & Techniques for Malware Analysis"),
        ("SC4015", "Cyber Physical System Security"),
        ("SC4016", "Cyber Threat Intelligence"),
        ("SC4020", "Data Analytics and Mining"),
        ("SC4021", "Information Retrieval"),
        ("SC4022", "Network Science"),
        ("SC4023", "Big Data Management"),
        ("SC4024", "Data Visualisation"),
        ("SC4025", "Developing Data Products"),
        ("SC4030", "Wireless and Mobile Networks"),
        ("SC4031", "Internet of Things: Communications & Networking"),
        ("SC4040", "Advanced Topics in Algorithms"),
        ("SC4050", "Parallel Computing"),
        ("SC4051", "Distributed Systems"),
        ("SC4052", "Cloud Computing"),
        ("SC4053", "Blockchain Technology"),
        ("SC4054", "Simulation and Modelling"),
        ("SC4060", "Virtual & Augmented Reality"),
        ("SC4061", "Computer Vision"),
        ("SC4062", "Generative Artificial Intelligence – Advanced Topics"),
        ("SC4172", "Internet of Things: Tiny Machine Learning"),
        ("SC4242", "Compiler Techniques"),
        ("MH4500", "Time Series Analysis"),
        ("MH4501", "Multivariate Analysis"),
        ("MH4511", "Sampling & Survey"),
        ("MH4513", "Survival Analysis"),
        ("MH4517", "Data Applications in Natural Sciences"),
        ("MH4518", "Simulation Techniques in Finance"),
        ("CS4022", "Social Media Mining"),
        ("CS4031", "Media Planning and Strategies"),
    ]
    
    for code, title in courses:
        course_map[code.upper()] = title
        course_map[code.lower()] = title
    
    return course_map

def main():
    print("Reading course titles from CSV...")
    course_map = read_course_titles()
    
    # If CSV reading failed, use manual mapping
    if not course_map:
        print("Using manual course mapping as fallback...")
        course_map = manual_course_map()
    
    print(f"Found {len(course_map)//2} course titles.")
    
    print("\nUpdating markdown files...")
    updated_count = update_markdown_files(course_map)
    print(f"\nCompleted! Updated {updated_count} markdown files with course titles.")

if __name__ == "__main__":
    main() 