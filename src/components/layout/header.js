import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './header.css';

library.add(faBars);

const Header = props => {
  let [opened, setOpened] = useState(false);
  let [lastScrollTop, setLastScrollTop] = useState(0);
  let [shouldHideHeader, setShouldHideHeader] = useState(false);

  useEffect(
    () => {
      const onScroll = () => {
        const currentScrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollTop > lastScrollTop) {
          // scrolled down
          setShouldHideHeader(true);
          setOpened(false);
        } else {
          // scrolled up
          setShouldHideHeader(false);
        }
        setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
      };
      window.addEventListener('scroll', onScroll);
      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    },
    [lastScrollTop]
  );

  const _toggleIcon = () => {
    setOpened(!opened);
  };

  const scrollDownClass = 'scroll-down';
  const lightBoxShadowClass = 'light-box-shadow';
  const headerClasses = shouldHideHeader
    ? `${scrollDownClass} ${lightBoxShadowClass}`
    : lightBoxShadowClass;

  return (
    <header className={headerClasses}>
      <div className="container header">
        <span className="header__title">
          <Link to="/" className="no-decoration">
            {props.siteTitle}
          </Link>
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
          <Link className="no-decoration navbar__link" to="/articles/">
            Articles
          </Link>
          <Link className="no-decoration navbar__link" to="/charts/">
            Charts
          </Link>
          <Link className="no-decoration navbar__link" to="/audio/">
            Audio
          </Link>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
