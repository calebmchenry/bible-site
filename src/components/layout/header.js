import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import './header.css'

const Header = ({ siteTitle }) => (
  <header className="header">
    <h1 style={{ margin: 0 }}>
      <Link className="header__title" to="/">
        {siteTitle}
      </Link>
    </h1>
    <nav className="navbar">
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
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
