import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';
import style from './ArticleTemplate.module.css';
import Layout from '../../layout/layout';
import PostTitle from '../../PostTitle/PostTitle';

export default function ArticleTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const linkData = [
    { name: 'Home', href: '/' },
    { name: 'Articles', href: '/articles/' },
  ];

  return (
    <Layout>
      <div className={`${style.articleTemplate} container page`}>
        <PostTitle
          author={frontmatter.author}
          date={frontmatter.date}
          linkData={linkData}
          tags={frontmatter.tags}
          title={frontmatter.title}
        />
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
        tags
      }
    }
  }
`;

ArticleTemplate.propTypes = {
  data: PropTypes.object,
};
