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
      label: 'PYP Solutions',
      link: {
        type: 'doc',
        id: 'academics/pyp-solutions/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Module Reviews',
      link: {
        type: 'doc',
        id: 'academics/module-reviews/index',
      },
      items: [
        {
          type: 'category',
          label: 'Level 1',
          items: [
            'academics/module-reviews/Level 1/sc1003-introduction-to-computational-thinking',
            'academics/module-reviews/Level 1/sc1007-data-structures-and-algorithms',
            'academics/module-reviews/Level 1/sc1015-introduction-to-data-science-and-ai',
            'academics/module-reviews/Level 1/mh1805-calculus',
            'academics/module-reviews/Level 1/mh1812-discrete-mathematics',
          ],
        },
        {
          type: 'category',
          label: 'Level 2',
          items: [
            'academics/module-reviews/Level 2/sc2001-algorithm-design-and-analysis',
            'academics/module-reviews/Level 2/sc2002-object-oriented-design-and-programming',
            'academics/module-reviews/Level 2/sc2006-software-engineering',
            'academics/module-reviews/Level 2/sc2207-intro-to-database-systems',
            'academics/module-reviews/Level 2/mh2100-calculus-3',
            'academics/module-reviews/Level 2/mh2500-probability-and-intro-to-statistics',
            'academics/module-reviews/Level 2/mh2802-linear-algebra-for-scientists',
          ],
        },
        {
          type: 'category',
          label: 'Level 3',
          items: [
            'academics/module-reviews/Level 3/sc3000-artificial-intelligence',
            'academics/module-reviews/Level 3/mh3500-statistics',
            'academics/module-reviews/Level 3/mh3510-regression-analysis',
            'academics/module-reviews/Level 3/mh3511-data-analysis-with-computer',
            'academics/module-reviews/Level 3/mh3701-basic-optimisation',
          ],
        },
        {
          type: 'category',
          label: 'Level 4',
          items: [
            'academics/module-reviews/Level 4/cz4010-applied-cryptography',
            'academics/module-reviews/Level 4/cz4031-database-system-principles',
            'academics/module-reviews/Level 4/cz4034-information-retrieval',
            'academics/module-reviews/Level 4/cz4042-neural-networks-and-deep-learning',
            'academics/module-reviews/Level 4/cz4046-intelligent-agents',
            'academics/module-reviews/Level 4/cz4123-big-data-management',
            'academics/module-reviews/Level 4/cz4125-developing-data-products',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      link: {
        type: 'doc',
        id: 'academics/resources/index',
      },
      items: [
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
