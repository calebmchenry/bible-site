import React, { Component } from 'react';

import './text-section.css';

export default class TextSection extends Component {
  render() {
    return <section>{this.props.children}</section>;
  }
}
