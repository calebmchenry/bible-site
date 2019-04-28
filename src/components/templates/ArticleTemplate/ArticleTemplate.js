import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';
import style from './ArticleTemplate.module.css';
import Layout from '../../layout/layout';
import Breadcrumbs from '../../shared/Breadcrumbs/Breadcrumbs';
import Tags from '../../shared/Tags/Tags';

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
        <Breadcrumbs linkData={linkData} />
        <div>
          <span>{frontmatter.date}</span>
        </div>
        <h1>{frontmatter.title}</h1>
        <div>
          <span>
            <em>
              <span>By: </span>
              <span className="accent">{frontmatter.author}</span>
            </em>
          </span>
        </div>
        <div className={style.tags}>
          <Tags tags={frontmatter.tags} />
        </div>
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
