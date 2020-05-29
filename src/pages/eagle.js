import React from "react"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import SEO from "../components/seo"
import EagleImages from "../components/eagleImages"
import Title from "../components/title"
import "../styles/eagle.css"

const Eagle = () => (
  <Layout>
  	<SEO title="Sean Higgins - Eagle Project" />
  	<Helmet>
        <meta charSet="utf-8" />
        <meta name="title" content="Sean Higgins - Eagle Project" />
        <meta name="description" content="Sean Higgins, Software Engineer" />
    </Helmet>
    <Title titleText="Eagle Scout Project" subtitleText="Portable wheelchair ramp built for Ride on St. Louis"/>
    

    <div style={{ marginBottom: `1.45rem` }}>
      <EagleImages />
    </div>
  </Layout>
)

export default Eagle
