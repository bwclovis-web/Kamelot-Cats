import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import {Helmet} from 'react-helmet'

export const CatPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title
}) => {
  const PostContent = contentComponent || Content
  return (
      <section className="container container-image">
      <Helmet>
        <title>{`Kamelot Cats | Meet the cats - ${title}`}</title>
      </Helmet>
        <div className="blog-content">
          <div className="heading-container">
            <h1 className="heading heading-h1">
              {title}
            </h1>
            <p className="subheading-h2">{description}</p>
          </div>
          <PostContent content={content} />
          {tags && tags.length ? (
            <div className="blog-taglist">
              <div className="heading-container">
                <h2>Tags</h2>
              </div>
              <ul className="blog-taglist_list">
                {tags.map(tag => (
                  <li key={tag + `tag`} className="blog-taglist_item">
                    <Link to={`/tags/${kebabCase(tag)}/`} className="blog-taglist_tag">{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>
  )
}

CatPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const CatPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CatPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

CatPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default CatPost

export const pageQuery = graphql`
  query CatById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
