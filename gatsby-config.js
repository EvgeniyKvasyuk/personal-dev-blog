const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Блог разработчика',
    description: 'Тут я рассказываю о разработке и не только',
    author: 'Evgenii Kvasiuk (EvgeniyKvasyuk)',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, './src'),
      }
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop', 'build-javascript'],
        options: {
          emitWarning: true,
          failOnError: true,
        },
      },
    },
    {
      resolve: '@danbruegge/gatsby-plugin-stylelint',
      options: {
        configFile: 'stylelint.config.js',
        files: ['**/*.{js, jsx, ts, tsx}'],
        failOnError: false,
        quiet: false,
      }
    },
    {
      resolve: 'gatsby-plugin-styled-components',
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: path.join(__dirname, './src/typography.ts'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: path.join(__dirname, './data'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, './images'),
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-typescript',
    'gatsby-plugin-graphql-codegen',
    'gatsby-plugin-typescript-checker',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-highlight-code',
            options: {
              terminal: 'carbon',
              theme: 'one-light',
              lineNumbers: false,
            },
          },
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2048,
              showCaptions: true,
            }
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: path.join(__dirname, './images/gatsby-icon.png') // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
