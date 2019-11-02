import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

import Helmet from 'react-helmet'

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  description,
}) => (
  <div className="container">
    <section>
      <Helmet>
        <title>{`Kamelot Cats | Welcome to Kamelot Cats`}</title>
      </Helmet>
      <div className="heading-container">
        <h1 className="heading heading-h1">
          {title}
        </h1>
        <p className="subheading-h2">
          {subheading}
        </p>
      </div>
      <p className="description">{description}</p>
    </section>
    <section>
      <div>
        <h2 className="heading heading-h2">
          Latest stories
        </h2>
        <BlogRoll />
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subheading
        description
      }
    }
  }
`
