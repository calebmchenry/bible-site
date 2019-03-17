import React from 'react';
import PropTypes from 'prop-types';

const articleCard = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <span>{props.date}</span>
      <span>{props.excerpt}</span>
    </div>
  );
};

articleCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  excerpt: PropTypes.string,
};

export default articleCard;
