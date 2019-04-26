import React, { Component } from 'react';

import './word-cycle-section.css';

export default class WordCycleSection extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <h1>
            The Bible is
            <div className="slidingVertical">
              <span>Help</span>
              <span>Life</span>
              <span>Healing</span>
              <span>Truth</span>
              <span>Everything</span>
            </div>
          </h1>
          <h1>for those who apply it.</h1>
        </div>
      </section>
    );
  }
}
