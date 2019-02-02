import React from 'react';

import Layout from '../components/layout/layout';
import Image from '../components/image';
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
        I made this website to help me apply my faith. I hope you look to this
        site as a way to help your faith grow as well.
      </p>
    </TextSection>
    <IconSection />
    <section>
      <div style={{ width: `150px`, margin: `auto` }}>
        <Image />
      </div>
    </section>
  </Layout>
);

export default IndexPage;
