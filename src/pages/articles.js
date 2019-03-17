import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import ArticleCard from '../components/articleCard';

const ArticlePage = () => {
  const articles = useStaticQuery(graphql`
    query ArticleListing {
      allMarkdownRemark(
        limit: 10
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "article" } } }
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

  return (
    <Layout>
      <SEO title="Page two" keywords={[`bible`, `christian`, `articles`]} />
      <h1>Articles</h1>
      {articles.allMarkdownRemark.edges.map(({ node }) => (
        <ArticleCard
          key={node.frontmatter.title}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          excerpt={node.excerpt}
        />
      ))}
    </Layout>
  );
};

export default ArticlePage;
