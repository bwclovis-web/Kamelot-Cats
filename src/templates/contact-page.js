import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../components/Layout'
import {graphql} from 'gatsby'
import Content, { HTMLContent } from '../components/Content'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
const ContactTop = ({
  title,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <React.Fragment>
      <div className="heading-container">
        <h1 className="heading heading-h1">{title}</h1>
      </div>
        <div className="description">
          <PageContent content={content} />
        </div>
    </React.Fragment>
  )
}
export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  
  handleChange = evt => {
    const parent = evt.target.parentElement.parentElement;
    this.setState({ [evt.target.name]: evt.target.value })
    if(evt.target.value) {
      parent.classList.add('_dirty');
    }
  }

  handleFocus = (evt) => {
    const parent = evt.target.parentElement.parentElement;
    parent.classList.add('_dirty');
  }

  handleBlur = (evt) => {
    const parent = evt.target.parentElement.parentElement;
    if(!evt.target.value) {
      parent.classList.remove('_dirty');
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    const {frontmatter, html} = this.props.data.markdownRemark;
  
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
            <ContactTop
              title={frontmatter.title}
              content={html}
              contentComponent={HTMLContent}
            />
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                className="contact-form"
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <fieldset>
                  <div className="contact-form_field">
                    <label className="label" htmlFor={'name'}>
                      Your name
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'name'}
                        onChange={this.handleChange}
                        onFocus= {(evt) => this.handleFocus(evt)}
                        onBlur ={(evt) => this.handleBlur(evt)}
                        id={'name'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="contact-form_field">
                    <label className="label" htmlFor={'email'}>
                      Email
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'email'}
                        name={'email'}
                        onChange={this.handleChange}
                        id={'email'}
                        required={true}
                        onFocus= {(evt) => this.handleFocus(evt)}
                        onBlur ={(evt) => this.handleBlur(evt)}
                      />
                    </div>
                  </div>
                </fieldset>
                <div className="contact-form_field">
                  <label className="label" htmlFor={'message'}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="contact-form_field">
                  <button className="btn btn-std" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
export const pageQuery = graphql`
  query ContactPageQuery {
  markdownRemark(frontmatter: {templateKey: {eq: "contact-page"}}) {
    frontmatter {
      title
    }
    html
  }
}
`