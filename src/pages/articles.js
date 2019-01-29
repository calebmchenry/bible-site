import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const ArticlePage = () => (
  <Layout>
    <SEO title="Page two" keywords={[`bible`, `christian`, `articles`]} />
    <h1>Articles</h1>
  </Layout>
)

export default ArticlePage
