import React, { Component } from 'react';

import ArticleIcon from '../../../images/svg/article-icon.svg';
import ChartIcon from '../../../images/svg/chart-icon.svg';
import AudioIcon from '../../../images/svg/audio-icon.svg';

import IconLink from '../IconLink/IconLink';

import style from './icon-section.module.css';

export default class IconSection extends Component {
  render() {
    return (
      <section>
        <div className={`container ${style.iconSection}`}>
          <IconLink path="/articles/" icon={ArticleIcon} name="Articles" />
          <IconLink path="/charts/" icon={ChartIcon} name="Charts" />
          <IconLink path="/audio/" icon={AudioIcon} name="Audio" />
        </div>
      </section>
    );
  }
}
