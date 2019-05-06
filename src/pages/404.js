import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container page">
      <div>
        <h1 className="accent">Sorry,</h1>
        <h2>but it looks like this page does not exist</h2>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
