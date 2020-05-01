import React from "react"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"

const Skills = () => (
  <Layout>
  	<SEO title="Sean Higgins - Skills" />
  	<Helmet>
        <meta charSet="utf-8" />
        <meta name="title" content="Sean Higgins - Skills" />
        <meta name="description" content="Sean Higgins, Software Engineer" />
    </Helmet>
    <Title titleText="Skills" subtitleText="My top programming languages and some projects of mine"/>
    
  </Layout>
)

export default Skills
