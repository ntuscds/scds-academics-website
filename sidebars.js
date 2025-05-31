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
      label: 'PYPHub',
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
          type: "category",
          label: "Level 1",
          items: [
            'academics/module-reviews/Level 1/mh1805',
            'academics/module-reviews/Level 1/mh1812',
            'academics/module-reviews/Level 1/sc1003',
            'academics/module-reviews/Level 1/sc1004',
            'academics/module-reviews/Level 1/sc1005',
            'academics/module-reviews/Level 1/sc1006',
            'academics/module-reviews/Level 1/sc1007',
            'academics/module-reviews/Level 1/sc1008',
            'academics/module-reviews/Level 1/sc1013'
          ]
        },
        {
          type: "category",
          label: "Level 2",
          items: [
            'academics/module-reviews/Level 2/mh2100',
            'academics/module-reviews/Level 2/mh2500',
            'academics/module-reviews/Level 2/mh2802',
            'academics/module-reviews/Level 2/sc2000',
            'academics/module-reviews/Level 2/sc2001',
            'academics/module-reviews/Level 2/sc2002',
            'academics/module-reviews/Level 2/sc2005',
            'academics/module-reviews/Level 2/sc2006',
            'academics/module-reviews/Level 2/sc2079',
            'academics/module-reviews/Level 2/sc2104',
            'academics/module-reviews/Level 2/sc2207'
          ]
        },
        {
          type: "category",
          label: "Level 3",
          items: [
            'academics/module-reviews/Level 3/mh3500',
            'academics/module-reviews/Level 3/mh3510',
            'academics/module-reviews/Level 3/mh3511',
            'academics/module-reviews/Level 3/sc3000',
            'academics/module-reviews/Level 3/sc3050',
            'academics/module-reviews/Level 3/sc3103'
          ]
        },
        {
          type: "category",
          label: "Level 4",
          items: [
            'academics/module-reviews/Level 4/sc4000',
            'academics/module-reviews/Level 4/sc4001',
            'academics/module-reviews/Level 4/sc4002',
            'academics/module-reviews/Level 4/sc4010',
            'academics/module-reviews/Level 4/sc4012',
            'academics/module-reviews/Level 4/sc4015',
            'academics/module-reviews/Level 4/sc4020',
            'academics/module-reviews/Level 4/sc4051'
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'Resources',

      items: [
        'academics/resources/course-guide',
        'academics/resources/stars-guide',
        'academics/resources/school-life',
        'academics/resources/peer-tutoring',
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
        {
          type: 'category',
          label: 'Software Development',
          items: [
            {
              type: 'doc',
              id: 'career/cs-fields/software-engineering',
              label: 'Software Engineer',
            },
            {
              type: 'doc',
              id: 'career/cs-fields/devops',
              label: 'DevOps Engineer',
            },
          ],
        },
        {
          type: 'category',
          label: 'Machine Learning',
          items: [
            {
              type: 'doc',
              id: 'career/cs-fields/machine-learning-engineer',
              label: 'ML Engineer',
            },
            {
              type: 'doc',
              id: 'career/cs-fields/machine-learning-researcher',
              label: 'ML Researcher',
            },
          ],
        },
        {
          type: 'category',
          label: 'Finance Technology',
          items: [
            {
              type: 'doc',
              id: 'career/cs-fields/quantitative-finance',
              label: 'Quantitative Finance',
            },
            {
              type: 'doc',
              id: 'career/cs-fields/blockchain-web3',
              label: 'Blockchain & Web3',
            },
          ],
        },
        {
          type: 'doc',
          id: 'career/cs-fields/cybersecurity',
          label: 'Cybersecurity',
        },
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'career/resources/interview-tips',
      ],
    },
  ],

  // SCDS Sub-clubs sidebar
  clubsSidebar: [
    {
      type: 'doc',
      id: 'clubs/hpc',
      label: 'NTU HPC',
    },
    'clubs/aiml',
    {
      type: 'doc',
      id: 'clubs/innovation-lab',
      label: 'iLab@NTU',
    },
  ],
};

export default sidebars;
