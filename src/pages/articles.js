import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import ArticleCard from '../components/ArticleCard/ArticleCard';

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
            excerpt(pruneLength: 500)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              path
              description
              tags
              author
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Articles" keywords={[`bible`, `christian`, `articles`]} />
      <div className="container page">
        <h1>Articles</h1>
        {articles.allMarkdownRemark.edges.map(({ node }) => (
          <ArticleCard
            key={node.frontmatter.path}
            author={node.frontmatter.author}
            date={node.frontmatter.date}
            description={node.excerpt}
            path={node.frontmatter.path}
            tags={node.frontmatter.tags}
            title={node.frontmatter.title}
          />
        ))}
      </div>
    </Layout>
  );
};

export default ArticlePage;
