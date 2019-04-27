import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';
import Layout from '../layout/layout';
import BreadCrumbs from '../shared/Breadcrumbs/Breadcrumbs';

export default function articleTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const linkData = [
    { name: 'Home', href: '/' },
    { name: 'Articles', href: '/articles/' },
  ];

  return (
    <Layout>
      <div className="container page">
        <BreadCrumbs linkData={linkData} />
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.author}</p>
        <p>{frontmatter.date}</p>
        <p>{frontmatter.tags}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
        tags
      }
    }
  }
`;

articleTemplate.propTypes = {
  data: PropTypes.object,
};
