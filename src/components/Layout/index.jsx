import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../Footer'
import Navbar from '../Navbar'
import '../index.scss'
import useSiteMetadata from '../SiteMetadata'
import { withPrefix } from "gatsby"

const TemplateWrapper = ({ children }) => {
  const { title, description, keywords } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix("/")}img/og-image.jpg`} />
      </Helmet>
     
      <div className="page-wrapper">
        <Navbar />
        <div>
          <main id="main" tabIndex="-1">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default TemplateWrapper
