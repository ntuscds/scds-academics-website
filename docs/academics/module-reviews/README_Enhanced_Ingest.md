# Enhanced Module Reviews Ingest System

This enhanced version of the ingest system uses GPT-4 to intelligently merge multiple reviews for the same module and improve the quality of single reviews.

## Features

- **Multiple Review Merging**: When multiple students review the same module, GPT-4 merges them into a comprehensive single review
- **Content Improvement**: Single reviews are enhanced for grammar, clarity, and flow while preserving original content
- **Average Ratings**: Automatically calculates average ratings when multiple reviews exist
- **Authentic Voice**: Maintains student-like tone and doesn't add artificial content

## Setup

### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

### 2. Set Up OpenAI API Key

Create a `.env` file in the root directory or in the module-reviews directory:

```
OPENAI_API_KEY=your_openai_api_key_here
```

You can get your API key from [OpenAI's platform](https://platform.openai.com/api-keys).

### 3. Ensure Excel File is Present

Make sure `CCDS Module Review 24_25(1-53).xlsx` is in the module-reviews directory.

## Usage

Run the enhanced ingest script:

```bash
cd docs/academics/module-reviews
python ingest_enhanced.py
```

## How It Works

### For Single Reviews
1. Extracts the review content
2. Sends it to GPT-4 with instructions to improve grammar and clarity
3. Preserves all original information and student voice
4. Creates a polished markdown file

### For Multiple Reviews
1. Groups all reviews by course code
2. Calculates average ratings across all reviews
3. Sends all reviews to GPT-4 with merging instructions
4. Creates a comprehensive review that captures insights from all contributors
5. Attribution shows all contributing authors

## Output

The script generates markdown files in the appropriate Level directories with:
- Enhanced content quality
- Proper rating averages
- Clear attribution
- Consistent formatting

## Example Output Structure

```markdown
---
id: sc4001
sidebar_position: 4
title: SC4001
---

import ModuleRatingsSummary from '@site/src/components/ModuleRatingsSummary';

<ModuleRatingsSummary 
  lectureClarity={4}
  contentRelevance={5}
  contentDifficulty={4}
  overallWorkload={3}
  teamDependency={2}
/>

## Course Summary
[GPT-enhanced content here]

## Workload
[GPT-enhanced content here]

## Projects
[GPT-enhanced content here]

## Tips to Do Well
[GPT-enhanced content here]

*Based on reviews by ABC, DEF, GHI*
```

## Cost Considerations

- GPT-4 API calls cost approximately $0.03-0.06 per 1K tokens
- Each review typically uses 500-1500 tokens
- Budget around $2-5 for processing 50-100 reviews

## Error Handling

- If GPT-4 API fails, the script falls back to original content
- Invalid course codes are skipped with warnings
- Processing continues even if individual reviews fail 