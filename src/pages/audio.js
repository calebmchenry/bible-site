import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const AudioPage = () => (
  <Layout>
    <SEO
      title="Page two"
      keywords={[`bible`, `christian`, `audio`, `sermons`, `lessons`]}
    />
    <h1>Audio</h1>
    <span>Coming Soon...</span>
  </Layout>
);

export default AudioPage;
