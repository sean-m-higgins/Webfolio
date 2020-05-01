import React from "react"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import Title from "../components/title"

const Eagle = () => (
  <Layout>
  	<SEO title="Sean Higgins - Eagle Project" />
  	<Helmet>
        <meta charSet="utf-8" />
        <meta name="title" content="Sean Higgins - Eagle Project" />
        <meta name="description" content="Sean Higgins, Software Engineer" />
    </Helmet>
    <Title titleText="Eagle Scout Project" subtitleText="Portable wheelchair ramp built for Ride on St. Louis"/>
    
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default Eagle
