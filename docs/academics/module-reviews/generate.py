import os
import re
import json

def get_markdown_files(directory):
    """Get all markdown files in a directory"""
    files = []
    if os.path.exists(directory):
        for filename in os.listdir(directory):
            if filename.endswith('.md') and filename != 'index.md':
                files.append(os.path.join(directory, filename))
    return files

def extract_module_code(filepath):
    """Extract module code from filename"""
    # Get filename without extension
    filename = os.path.basename(filepath)
    filename_no_ext = os.path.splitext(filename)[0]
    return filename_no_ext.lower()

def get_sidebar_path(level_dir, module_code):
    """Generate the correct sidebar path format"""
    # Format like 'academics/module-reviews/Level 1/sc1003'
    return f"academics/module-reviews/{level_dir}/{module_code}"

def build_sidebar():
    """Build the sidebar structure for module reviews"""
    base_dir = '.'  # Current directory
    
    # Find all Level directories
    level_dirs = [d for d in os.listdir(base_dir) 
                 if os.path.isdir(os.path.join(base_dir, d)) and d.startswith('Level')]
    
    # Sort level directories numerically
    level_dirs.sort(key=lambda x: int(x.split(' ')[1]) if len(x.split(' ')) > 1 and x.split(' ')[1].isdigit() else 0)
    
    sidebar_items = []
    
    # Process each level directory
    for level_dir in level_dirs:
        level_path = os.path.join(base_dir, level_dir)
        md_files = get_markdown_files(level_path)
        
        # Skip empty directories
        if not md_files:
            continue
        
        # Process each markdown file
        level_items = []
        for md_file in md_files:
            module_code = extract_module_code(md_file)
            sidebar_path = get_sidebar_path(level_dir, module_code)
            level_items.append(sidebar_path)
        
        # Sort the items alphabetically
        level_items.sort()
        
        # Add the level category
        sidebar_items.append({
            'type': 'category',
            'label': level_dir,
            'items': level_items
        })
    
    return sidebar_items

def generate_sidebar_code():
    """Generate JavaScript code for sidebar items"""
    sidebar_items = build_sidebar()
    
    if not sidebar_items:
        print("No module review files found in Level directories.")
        return
    
    # Create JSON representation
    items_json = json.dumps(sidebar_items, indent=2)
    
    # Convert to JS format
    js_code = items_json.replace('"type":', 'type:').replace('"label":', 'label:').replace('"items":', 'items:')
    
    # Clean up string formatting for array items
    lines = js_code.split('\n')
    cleaned_lines = []
    for line in lines:
        if '"academics/module-reviews' in line:
            # Convert JSON string to bare string for sidebar items
            cleaned_line = line.replace('"', "'")
            # Remove trailing comma if it exists
            if cleaned_line.endswith("',"):
                cleaned_line = cleaned_line[:-1] + ","
            cleaned_lines.append(cleaned_line)
        else:
            cleaned_lines.append(line)
    
    js_code = '\n'.join(cleaned_lines)
    
    # Print statistics
    total_modules = sum(len(item['items']) for item in sidebar_items)
    print(f"Found {total_modules} module reviews across {len(sidebar_items)} level directories")
    
    # Write to a file
    output_file = 'sidebar_items.js'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(js_code)
    
    print(f"\nSidebar items written to {output_file}")
    print("\nTo update your sidebar:")
    print("1. Open sidebars.js")
    print("2. Find the Module Reviews section")
    print("3. Replace the 'items' array with the content of sidebar_items.js")

if __name__ == "__main__":
    generate_sidebar_code() 