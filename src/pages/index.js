import React from 'react';

import Layout from '../components/layout/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`bible`, `christian`, `truth`]} />
    <h1>Hello people,</h1>
    <p>Welcome to this bible site.</p>
    <p>It is currently under construction.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
);

export default IndexPage;
