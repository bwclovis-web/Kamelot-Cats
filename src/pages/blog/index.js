import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="container">
          <Helmet>
            <title>{`Kamelot Cats | Blog Home Page`}</title>
          </Helmet>
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
