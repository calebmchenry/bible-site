import React, { Component } from 'react';

import PropTypes from 'prop-types';

import './text-section.css';

class TextSection extends Component {
  render() {
    return (
      <section>
        <div className="container">{this.props.children}</div>
      </section>
    );
  }
}

TextSection.propTypes = {
  children: PropTypes.array,
};

export default TextSection;
