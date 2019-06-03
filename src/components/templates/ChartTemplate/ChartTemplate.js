import React from 'react';
import PropTypes from 'prop-types';

import { graphql, Link } from 'gatsby';
import style from './ChartTemplate.module.css';
import Layout from '../../layout/layout';
import PostTitle from '../../PostTitle/PostTitle';

export default function ChartTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const linkData = [
    { name: 'Home', href: '/' },
    { name: 'Charts', href: '/charts/' },
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
        <a
          href={frontmatter.image}
          className={`no-decoration ${style.imageLink}`}
        >
          <img className={style.image} src={frontmatter.image} />
        </a>
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
        image
        tags
      }
    }
  }
`;

ChartTemplate.propTypes = {
  data: PropTypes.object,
};
