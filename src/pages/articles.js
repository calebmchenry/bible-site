import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const ArticlePage = () => {
  const articles = useStaticQuery(graphql`
    query ArticleListing {
      allMarkdownRemark(
        limit: 10
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            excerpt
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
            }
          }
        }
      }
    }
  `);

  console.log(articles);

  return (
    <Layout>
      <SEO title="Page two" keywords={[`bible`, `christian`, `articles`]} />
      <h1>Articles</h1>
      {articles.allMarkdownRemark.edges.map(({ node }) => (
        <h2 key={node.frontmatter.title}>{node.frontmatter.title}</h2>
      ))}
    </Layout>
  );
};

export default ArticlePage;
