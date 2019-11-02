import React from 'react'
import Layout from '../../components/Layout'
import CatCarrier from '../../components/CatCarrier'
import {Helmet} from 'react-helmet';

export default class CatIndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Kamelot Cats | Meet the cats</title>
        </Helmet>
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
      </React.Fragment>
    )
  }
}
