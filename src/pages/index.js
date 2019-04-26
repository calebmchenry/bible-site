import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import WordCycleSection from '../components/sections/word-cycle-section';
import TextSection from '../components/sections/text-section';
import IconSection from '../components/sections/icon-section/icon-section';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`bible`, `christian`, `truth`]} />
    <WordCycleSection />
    <TextSection>
      <h1>What is the goal of this website?</h1>
      <p>
        <span className="accent">
          <strong>To have God be praised!</strong>
        </span>
      </p>
      <p>
        But if you are looking for more detail than that. I want all the content
        on this website to be solely based on God and what He has told us. I
        don&#39;t want to veer into speculations and into teachings of people
        that has stemmed from the word of God but rather to stay in the word
        itself. Here are some things that I belive will achieve the goal of
        having God be praised.
      </p>
      <ol>
        <li>To have the word of God spoken.</li>
        <li>To help people grow in their faith by writing.</li>
        <li>To help people grow in their faith fomr reading the content.</li>
      </ol>
    </TextSection>
    <IconSection />
  </Layout>
);

export default IndexPage;
