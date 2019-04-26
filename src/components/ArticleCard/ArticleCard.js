import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import style from './ArticleCard.module.css';
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
        <Link className="no-decoration" to={props.path}>
          {props.title}
        </Link>
      </h1>
      <div>
        <span>By: </span>
        <span className="accent">
          <em>{props.author}</em>
        </span>
      </div>
      <p>{props.description}</p>
      <div>
        {props.tags.map(tag => (
          <span className={style.tag} key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

articleCard.propTypes = {
  author: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
};

export default articleCard;
