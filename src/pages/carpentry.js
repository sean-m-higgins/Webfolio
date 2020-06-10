import React from "react"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import SEO from "../components/seo"
import CoffeeImages from "../components/coffeeImages"
import DeskImages from "../components/deskImages"
import SideImages from "../components/sidetableImages"
import ShoeImages from "../components/shoerackImages"
import Title from "../components/title"
import SmallSection from "../components/smallSection"


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

      <SmallSection sectionTitle="About" paraText="Starting before my freshman year at Loyola, I decided to put my woodworking skills to work during my summer break. Of course my freshman dorm was only big enough to fit one small side table, but as the years progressed, so did the size of my bedrooms. I wanted to make a bit of tradition out of it, so I continued to make one piece of furniture each summer and now I have an apartment full of my own hand-crafted decor." />
      
      <SmallSection sectionTitle="Coffee Table:" paraText="With a glass centered top, this dual-level coffee table will be the centerpiece of my living room for my senior year."/>
      <div style={{ marginBottom: `1.45rem` }}>
        <CoffeeImages />
      </div>
      
      <SmallSection sectionTitle="Desk:" paraText="This side table is a detachable set of piped legs supporting a crate on top."/>
      <div style={{marginBottom: `1.45rem` }}>
        <DeskImages />
      </div>
      
      <SmallSection sectionTitle="Shoe Rack:" paraText="This side table is a detachable set of piped legs supporting a crate on top."/>
      <div style={{marginBottom: `1.45rem` }}>
        <ShoeImages />
      </div>
      
      <SmallSection sectionTitle="Side Table:" paraText="This side table is a detachable set of piped legs supporting a crate on top."/>
      <div style={{marginBottom: `1.45rem` }}>
        <SideImages />
      </div>
    </Layout> 
  );
};

export default Carpentry
