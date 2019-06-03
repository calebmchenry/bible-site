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

  // Articles
  const articleTemplate = path.resolve(
    `src/components/templates/ArticleTemplate/ArticleTemplate.js`
  );

  // Charts
  const chartTemplate = path.resolve(
    `src/components/templates/ChartTemplate/ChartTemplate.js`
  );

  // TODO 6/2/2019 add back when there is audio
  // Audio
  // const audioTemplate = path.resolve(
  //   `src/components/templates/AudioTemplate/AudioTemplate.js`
  // );

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
      let template;
      let prefix = node.fields.slug.split('/')[1];
      if (prefix == 'articles') {
        template = articleTemplate;
      } else if (prefix == 'charts') {
        template = chartTemplate;
      }
      // TODO 6/2/2019 add back when there is audio
      // else {
      //   template = audioTemplate;
      // }
      createPage({
        path: node.fields.slug,
        component: template,
        context: { slug: node.fields.slug },
      });
    });
  });
};
