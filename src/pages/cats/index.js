import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="container">
          <div className="heading-container">
            <h1 className="heading heading-h1">
              Latest Stories
            </h1>
          </div>
          <BlogRoll />
        </section>
      </Layout>
    )
  }
}
