// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Academic sidebar
  academicsSidebar: [
    {
      type: 'category',
      label: 'Module Reviews',
      items: ['academics/module-reviews/index'],
    },
    {
      type: 'category',
      label: 'PYP Solutions',
      items: ['academics/pyp-solutions/index'],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'academics/resources/index',
        'academics/resources/course-guide',
        'academics/resources/stars-guide',
        'academics/resources/school-life',
      ],
    },
  ],

  // Career sidebar
  careerSidebar: [
    {
      type: 'category',
      label: 'CS Fields',
      items: [
        'career/cs-fields/index',
        'career/cs-fields/software-engineering',
        'career/cs-fields/machine-learning',
        'career/cs-fields/quantitative-finance',
        'career/cs-fields/product-management',
        'career/cs-fields/cybersecurity',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'career/resources/index',
        'career/resources/internship-search',
        'career/resources/interview-tips',
      ],
    },
  ],

  // SCDS Sub-clubs sidebar
  clubsSidebar: [
    'clubs/index',
    'clubs/aiml',
    'clubs/hpc',
    'clubs/cybersecurity',
  ],
};

export default sidebars;
