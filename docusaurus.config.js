// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SCDS Academics',
  tagline: 'Students Computing and Data Science Club',
  favicon: 'img/scds-club-logo.png',

  // Set the production url of your site here
  url: 'https://www.ntuscds.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ntuscds', // Usually your GitHub org/user name.
  projectName: 'academics-page', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/scds-club-logo.png',
      navbar: {
        title: 'SCDS Academics',
        logo: {
          alt: 'SCDS Logo',
          src: 'img/scds-club-logo.png',
          srcDark: 'img/scds-club-darkmode-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'academicsSidebar',
            position: 'left',
            label: 'Academics',
          },
          {
            type: 'docSidebar',
            sidebarId: 'careerSidebar',
            position: 'left',
            label: 'Career Insights',
          },
          {
            type: 'docSidebar',
            sidebarId: 'clubsSidebar',
            position: 'left',
            label: 'SCDS Sub-clubs',
          },
          {
            to: '/docs/contributors',
            position: 'left',
            label: 'Contributors',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Academics',
            items: [
              {
                label: 'Module Reviews',
                to: '/docs/academics/module-reviews',
              },
              {
                label: 'PYP Solutions',
                to: '/docs/academics/pyp-solutions',
              },
              {
                label: 'Resources',
                to: '/docs/academics/resources',
              },
            ],
          },
          {
            title: 'Career Insights',
            items: [
              {
                label: 'CS Fields Overview',
                to: '/docs/career/cs-fields',
              },
              {
                label: 'Software Engineering',
                to: '/docs/career/cs-fields/software-engineering',
              },
              {
                label: 'DevOps Engineer',
                to: '/docs/career/cs-fields/devops',
              },
              {
                label: 'Machine Learning Engineer',
                to: '/docs/career/cs-fields/machine-learning-engineer',
              },
              {
                label: 'Machine Learning Researcher',
                to: '/docs/career/cs-fields/machine-learning-researcher',
              },
              {
                label: 'Quantitative Finance',
                to: '/docs/career/cs-fields/quantitative-finance',
              },
              {
                label: 'Blockchain & Web3',
                to: '/docs/career/cs-fields/blockchain-web3',
              },
              {
                label: 'Cybersecurity',
                to: '/docs/career/cs-fields/cybersecurity',
              },
              {
                label: 'Career Resources',
                to: '/docs/career/resources',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'AIML Club',
                to: '/docs/clubs/aiml',
              },
              {
                label: 'HPC Club',
                to: '/docs/clubs/hpc',
              },
              {
                label: 'Innovation Lab',
                to: '/docs/clubs/innovation-lab',
              },
              {
                label: 'Main Website',
                href: 'https://ntuscds.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Students Computing and Data Science Club. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
      },
    }),
};

export default config;
