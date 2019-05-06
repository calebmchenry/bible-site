import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

import style from './IconLink.module.css';

const IconLink = props => {
  return (
    <div className={style.iconLink}>
      <Link className="icon-section__wrapper no-decoration" to={props.path}>
        <img className="icon-section__icon" src={props.icon} alt={props.name} />
      </Link>
      <div>
        <h1>{props.name}</h1>
      </div>
    </div>
  );
};

IconLink.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  path: PropTypes.string,
};

export default IconLink;
