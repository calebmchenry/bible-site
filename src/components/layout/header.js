import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './header.css';

library.add(faBars);

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };

    this._toggleHeader = this._toggleHeader.bind(this);
  }

  _toggleHeader() {
    this.setState(state => ({
      opened: !state.opened,
    }));
  }

  render() {
    return (
      <header className="header light-box-shadow">
        <span className="header__title">
          <Link to="/">{this.props.siteTitle}</Link>
        </span>
        <FontAwesomeIcon
          className="navbar__menu-icon"
          icon="bars"
          onClick={this._toggleHeader}
        />
        <nav
          id="navbar"
          className={
            this.state.opened === true ? 'navbar navbar-toggle' : 'navbar'
          }
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
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
