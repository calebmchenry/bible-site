import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import style from './ArticleCard.module.css';
import Tags from '../shared/Tags/Tags';
const articleCard = props => {
  const datetime = new Date(props.date).toISOString();

  return (
    <article className={style.articleCard}>
      <div>
        <span className="accent">
          <time dateTime={datetime}>{props.date}</time>
        </span>
      </div>
      <h1>
        <Link className="no-decoration" to={props.slug}>
          {props.title}
        </Link>
      </h1>
      <div>
        <span>By: </span>
        <span className="accent">
          <em>{props.author}</em>
        </span>
      </div>
      <p>
        {props.excerpt}... <Link to={props.slug}>Read article</Link>
      </p>
      <Tags tags={props.tags} />
    </article>
  );
};

articleCard.propTypes = {
  author: PropTypes.string,
  date: PropTypes.string,
  excerpt: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
};

export default articleCard;
