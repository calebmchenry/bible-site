import { Link } from 'gatsby';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class IconLink extends Component {
  static get propTypes() {
    return {
      icon: PropTypes.string,
      name: PropTypes.string,
      path: PropTypes.string,
    };
  }

  render() {
    return (
      <Link className="icon-section__wrapper" to={this.props.path}>
        <img
          className="icon-section__icon"
          src={this.props.icon}
          alt={this.props.name}
        />
      </Link>
    );
  }
}
