import React from "react"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import SEO from "../components/seo"
import CoffeeImages from "../components/coffeeImages"
import DeskImages from "../components/deskImages"
import SideImages from "../components/sidetableImages"
import ShoeImages from "../components/shoerackImages"
import Title from "../components/title"


const Carpentry = ( ) => {  
  return (
    <Layout>
      <SEO title="Sean Higgins - Carpentry" />
      <Helmet>
          <meta charSet="utf-8" />
          <meta name="title" content="Sean Higgins - Carpentry" />
          <meta name="description" content="Sean Higgins, Software Engineer" />
      </Helmet>
      <Title titleText="Woodworking Projects" subtitleText="A piece of furniture each year of university"/>

      Coffee:
      <div style={{ marginBottom: `1.45rem` }}>
        <CoffeeImages />
      </div>

      Desk:
      <div style={{marginBottom: `1.45rem` }}>
        <DeskImages />
      </div>

      Shoe:
      <div style={{marginBottom: `1.45rem` }}>
        <ShoeImages />
      </div>

      Side:
      <div style={{marginBottom: `1.45rem` }}>
        <SideImages />
      </div>
    </Layout> 
  );
};

export default Carpentry
