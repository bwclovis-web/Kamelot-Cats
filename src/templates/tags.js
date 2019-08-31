import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug} className="blog-taglist_item" >
        <Link to={post.node.fields.slug} className="blog-taglist_tag">
          <p className="subheading-h3">{post.node.frontmatter.title}</p>
        </Link>
      </li>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <Layout>
        <section className="container">
          <Helmet title={`${tag.toUpperCase()} | ${title}`} />
            <div className="heading-container">
              <h1 className="heading heading-h1">{tagHeader}</h1>
            </div>
            <ul className="blog-taglist_list">{postLinks}</ul>
            <p>
              <Link to="/tags/" className="blog-taglist_tag _small">Browse all tags</Link>
            </p>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
