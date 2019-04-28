import React from 'react';
import PropTypes from 'prop-types';
import style from './Tags.module.css';

const Tags = props => {
  return (
    <div className={style.tags}>
      {props.tags.map(tag => (
        <span className={style.tag} key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.array,
};

export default Tags;
