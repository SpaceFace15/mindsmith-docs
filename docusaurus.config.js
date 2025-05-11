// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mindsmith Docs',
  tagline: 'Technical Writing & Guides',
  favicon: 'img/favicon.ico',

  // ✅ MUST update these for GitHub Pages
  url: 'https://SpaceFace15.github.io',
  baseUrl: '/mindsmith-docs/',

  organizationName: 'SpaceFace15', // GitHub username
  projectName: 'mindsmith-docs',   // Repo name

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: undefined,
        },
        blog: false,
        pages: false,
        theme: { customCss: './src/css/custom.css' },
      }),
    ],
  ],

  themeConfig: ({
    navbar: {
      title: 'Mindsmith Docs',
      items: [
        {
          href: 'https://github.com/SpaceFace15/mindsmith-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Joshua's Docs`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
