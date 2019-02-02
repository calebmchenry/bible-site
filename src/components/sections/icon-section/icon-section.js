import React, { Component } from 'react';

import ArticleIcon from '../../../images/svg/article-icon.svg';
import ChartIcon from '../../../images/svg/chart-icon.svg';
import AudioIcon from '../../../images/svg/audio-icon.svg';

import IconLink from './icon-link';

import './icon-section.css';

export default class IconSection extends Component {
  render() {
    return (
      <section className="icon-section">
        <IconLink path="/articles/" icon={ArticleIcon} name="Articles" />
        <IconLink path="/charts/" icon={ChartIcon} name="Charts" />
        <IconLink path="/audio/" icon={AudioIcon} name="Audio" />
      </section>
    );
  }
}
