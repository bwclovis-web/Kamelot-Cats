import React from 'react'
import Layout from '../../components/Layout'
import CatCarrier from '../../components/CatCarrier'

export default class CatIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="container">
          <div className="heading-container">
            <h1 className="heading heading-h1">
              Meet the cats
            </h1>
          </div>
          <CatCarrier />
        </section>
      </Layout>
    )
  }
}
