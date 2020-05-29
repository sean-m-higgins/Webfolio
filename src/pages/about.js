import React from "react"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"
import Section from "../components/section"

const About = () => (
  <Layout>
  	<SEO title="Sean Higgins - About" />
  	<Helmet>
        <meta charSet="utf-8" />
        <meta name="title" content="Sean Higgins - About" />
        <meta name="description" content="Sean Higgins, Software Engineer" />
    </Helmet>
    <Title titleText="About" subtitleText="A few areas of interest"/>

    <Section sectionTitle="Software Engineer" subtitle="" more_here_link="/about" paraText="After beginning my college career as a Mathematics major, I switched to Computer Science and never looked back! Programming comes natural to me and I find deep satisfaction with the code I create. I have experience in all major areas of computing including front-end, back-end, systems, and machine learning, and my proficient languages including example projects are listed below." />
    <Section sectionTitle="Researcher" subtitle="" more_here_link="/about" paraText="Research is a fundamental area of education, and I have completed my own research in various interdisciplinary subjects. From projects in Finance (equity report and pitch), Law (moot court arguments), Environmental Science (report on waste management systems of Chicago and Berlin), Statistics (opioid epidemic), and most densely Computer Science (machine learning text analysis), I have honed my skills of gathering information and deriving complex analysis from my findings." />
    <Section sectionTitle="Photographer" subtitle="" more_here_link="/about" paraText="Though most of my photos are #shotOnIphone, I enjoy taking and editing photos to publish on my Instagram (linked below). Photography allows me to reminisce and reflect on personal experiences and then transform the image with new meaning. A leisure and a hobby. (The pictures featured on this website were taken by me)." />
    <Section sectionTitle="Carpenter" subtitle="" more_here_link="/carpentry" paraText="Since I was a kid, I can remember spending time in my garage with my Dad either fixing or creating something. An activity that I've gained invaluable lessons from has also been a source of great joy. Each summer before my college school year I have created a piece of furniture from scratch to use while at school. Please explore my page filled with my various woodworking projects." />
    <Section sectionTitle="Eagle Scout" subtitle="" more_here_link="/eagle" paraText="The Eagle Scout award is my highest and most cherished achievement that I obtained before the age of 18. My Eagle Project is discussed and linked below. Active in Troop 671 for six years, participating in a wide variety of activities and learning life lessons that propelled me to where I am today." />
  </Layout>
)

export default About
