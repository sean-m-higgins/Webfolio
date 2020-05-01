import React from "react"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Sean Higgins - Home" />
    <Helmet>
        <meta charSet="utf-8" />
        <meta name="title" content="Sean Higgins - Home" />
        <meta name="description" content="Sean Higgins, Software Engineer" />
    </Helmet>
    <div id="temp">
      <h1>Currently Under Construction ... come back soon!</h1>
    </div>
  </Layout>
)

export default IndexPage
