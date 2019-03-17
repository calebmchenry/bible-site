import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const ChartPage = () => {
  const charts = useStaticQuery(graphql`
    query ChartListing {
      allMarkdownRemark(
        limit: 10
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "chart" } } }
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
      <SEO title="Page two" keywords={[`bible`, `christian`, `charts`]} />
      <h1>Charts</h1>
      {charts.allMarkdownRemark.edges.map(({ node }) => (
        <h2 key={node.frontmatter.title}>{node.frontmatter.title}</h2>
      ))}
    </Layout>
  );
};
export default ChartPage;
