import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className="container">
      <Helmet title={`Tags | ${title}`} />
        <div className="heading-container"><h1 className="heading heading-h1">Tags</h1></div>
        <ul className="blog-taglist_list">
          {group.map(tag => (
            <li key={tag.fieldValue} className="blog-taglist_item">
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} className="blog-taglist_tag">
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
    </section>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
