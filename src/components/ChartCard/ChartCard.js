import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import style from './ChartCard.module.css';

const ChartCard = props => {
  return (
    <article className={style.card}>
      <img src={props.image} />
      <div className={style.bottomSection}>
        <h2>
          <Link className="no-decoration" to={props.slug}>
            {props.title}
          </Link>
        </h2>
        <span>By: </span>
        <span className="accent">
          <em>{props.author}</em>
        </span>
      </div>
    </article>
  );
};

ChartCard.propTypes = {
  author: PropTypes.string,
  date: PropTypes.string,
  excerpt: PropTypes.string,
  image: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
};

export default ChartCard;
