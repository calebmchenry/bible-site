import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import style from './charts.module.css';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

import ChartCard from '../components/ChartCard/ChartCard';

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
            excerpt(pruneLength: 500)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              image
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
      <SEO title="Charts" keywords={[`bible`, `christian`, `charts`]} />
      <div className="container page">
        <h1>Charts</h1>
        <div className={style.chartContainer}>
          {charts.allMarkdownRemark.edges.map(({ node }) => (
            <ChartCard
              key={node.fields.slug}
              author={node.frontmatter.author}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
              slug={node.fields.slug}
              tags={node.frontmatter.tags}
              title={node.frontmatter.title}
              image={node.frontmatter.image}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default ChartPage;
