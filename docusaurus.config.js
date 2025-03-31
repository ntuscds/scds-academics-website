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

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/scds/academics-page/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/scds/academics-page/tree/main/',
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
            href: 'https://github.com/scds',
            label: 'GitHub',
            position: 'right',
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
                label: 'CS Fields',
                to: '/docs/career/cs-fields',
              },
              {
                label: 'Resources',
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
                label: 'Cybersecurity Club',
                to: '/docs/clubs/cybersecurity',
              },
              {
                label: 'Main Website',
                href: 'https://scds.cc',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Students Computing and Data Science Club. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
