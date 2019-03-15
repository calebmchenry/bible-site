import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './header.css';

library.add(faBars);

const Header = props => {
  let [opened, setOpened] = useState(false);

  const _toggleIcon = () => {
    setOpened(!opened);
  };

  return (
    <header className="header light-box-shadow">
      <span className="header__title">
        <Link to="/">{props.siteTitle}</Link>
      </span>
      <FontAwesomeIcon
        className="navbar__menu-icon"
        icon="bars"
        onClick={_toggleIcon}
      />
      <nav
        id="navbar"
        className={opened === true ? 'navbar navbar-toggle' : 'navbar'}
      >
        <Link className="navbar__link" to="/articles/">
          articles
        </Link>
        <Link className="navbar__link" to="/charts/">
          charts
        </Link>
        <Link className="navbar__link" to="/audio/">
          audio
        </Link>
      </nav>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
