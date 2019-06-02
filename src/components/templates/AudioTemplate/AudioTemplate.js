import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';
import style from './AudioTemplate.module.css';
import Layout from '../../layout/layout';
import PostTitle from '../../PostTitle/PostTitle';

export default function AudioTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const linkData = [
    { name: 'Home', href: '/' },
    { name: 'Audio', href: '/audio/' },
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
        <audio src={frontmatter.audio} />
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

AudioTemplate.propTypes = {
  data: PropTypes.object,
};
