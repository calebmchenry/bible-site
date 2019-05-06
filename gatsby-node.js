const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
    });
    const prefix =
      node.frontmatter.templateKey === 'audio'
        ? '/audio'
        : `/${node.frontmatter.templateKey}s`;
    createNodeField({
      node,
      name: 'slug',
      value: `${prefix}${slug}`,
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const articleTemplate = path.resolve(
    `src/components/templates/ArticleTemplate/ArticleTemplate.js`
  );

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
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
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: articleTemplate,
        context: { slug: node.fields.slug },
      });
    });
  });
};
