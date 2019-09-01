import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import {newObserver} from '../../Utils/utility'
class CatCarrier extends React.Component {
  componentDidMount() {
    newObserver();
  }
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="blogroll-container">
        {posts &&
          posts.map(({ node: post }) => (
              <article
                key={post.id}
                className={`blogroll-article ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <React.Fragment>
                      <div className="featured-thumbnail">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: post.frontmatter.featuredimage,
                              alt: `featured image thumbnail for post ${
                                post.title
                              }`,
                            }}
                          />
                          <div className="post-meta">
                        <Link
                          className="title heading heading-h3"
                          to={post.fields.slug}
                        >
                          {post.frontmatter.title}
                        </Link>
                          <p className="subtitle">
                            <span> &bull; </span>
                            {post.frontmatter.date}
                          </p>
                      </div>
                      </div>
                    </React.Fragment>
                  ) : null} 
                </header>
                <p className="blogroll-description">
                  {post.excerpt}
                </p>
                <Link className="btn btn-std _sm" to={post.fields.slug}>
                    Keep Reading
                  </Link>
              </article>
          ))}
      </div>
    )
  }
}

CatCarrier.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query CatCarrierQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "cat-page" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 100)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <CatCarrier data={data} count={count} />}
  />
)
