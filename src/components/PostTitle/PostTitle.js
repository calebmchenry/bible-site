import React from 'react';
import PropTypes from 'prop-types';

import Tags from '../shared/Tags/Tags';
import Breadcrumbs from '../shared/Breadcrumbs/Breadcrumbs';

import style from './PostTitle.module.css';

const PostTitle = props => {
  return (
    <div>
      <Breadcrumbs linkData={props.linkData} />
      <div>
        <span>{props.date}</span>
      </div>
      <h1 className={style.mainTitle}>{props.title}</h1>
      <div>
        <span>
          <em>
            <span>By: </span>
            <span className="accent">{props.author}</span>
          </em>
        </span>
      </div>
      <div className={style.tags}>
        <Tags tags={props.tags} />
      </div>
    </div>
  );
};

PostTitle.propTypes = {
  author: PropTypes.string,
  date: PropTypes.string,
  linkData: PropTypes.array,
  tags: PropTypes.array,
  title: PropTypes.string,
};

export default PostTitle;
