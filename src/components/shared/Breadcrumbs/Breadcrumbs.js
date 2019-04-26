import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import style from './Breadcrumbs.module.css';

const breadcrumbs = props => {
  return (
    <ul className={style.breadcrumbs}>
      {props.linkData.map(linkData => (
        <li key={linkData.name}>
          <Link to={linkData.href}>{linkData.name}</Link>
        </li>
      ))}
    </ul>
  );
};

breadcrumbs.propTypes = {
  linkData: PropTypes.array,
};

breadcrumbs.defaultProps = {
  linkData: [],
};

export default breadcrumbs;
