/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { paginate } = require('gatsby-awesome-pagination');
const { POSTS_PER_PAGE } = require('./constants');


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postsQueryResults = await graphql(`
      {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "\//posts/"}}
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `);

  const posts = postsQueryResults.data.allMarkdownRemark.edges;

  console.log(POSTS_PER_PAGE);

  paginate({
    createPage, // The Gatsby `createPage` function
    items: posts, // An array of objects
    itemsPerPage: POSTS_PER_PAGE, // How many items you want per page
    itemsPerFirstPage: POSTS_PER_PAGE, // How many items you want per page
    pathPrefix: '/', // Creates pages like `/`, `/2`, etc
    component: path.resolve('./src/templates/PostsList/PostsList.tsx'),
  });

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/Post/Post.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
