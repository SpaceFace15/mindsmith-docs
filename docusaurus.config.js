// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mindsmith Docs', // Must not be empty
  tagline: 'Technical Writing & Guides',
  favicon: 'img/favicon.ico',

  url: 'http://localhost:3000', // For local testing, or update with your actual URL
  baseUrl: '/', 

  organizationName: 'your-org',
  projectName: 'your-docs',

  onBrokenLinks: 'warn', // Change this to 'warn' for testing
  onBrokenMarkdownLinks: 'warn', // Warn for broken markdown links

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  
  presets: [
    [
      'classic',
      ({
        docs: {
        
         routeBasePath: '/',      // serve docs at /
          sidebarPath: './sidebars.js',
          editUrl: undefined,
        },
        blog: false,
        pages: false,
        theme: { customCss: './src/css/custom.css' },
      }),
    ],
  ],





  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Mindsmith Docs', // This is okay if you don't want it shown
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
