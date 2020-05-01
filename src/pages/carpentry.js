import React from "react"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import Title from "../components/title"

const Carpentry = () => (
  <Layout>
    <SEO title="Sean Higgins - Carpentry" />
  	<Helmet>
        <meta charSet="utf-8" />
        <meta name="title" content="Sean Higgins - Carpentry" />
        <meta name="description" content="Sean Higgins, Software Engineer" />
    </Helmet>
    <Title titleText="Woodworking Projects" subtitleText="A piece of furniture each year of university"/>


    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default Carpentry
