import React from "react"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"
import SkillsSection from "../components/skillsSection"
import SkillsSectionText from "../components/skillsSectionText"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faRProject, faJs } from "@fortawesome/free-brands-svg-icons"
// import ReactDOM from 'react-dom';
import "../styles/skills.css"

const Skills = () => (
  <Layout>
  	<SEO title="Sean Higgins - Skills" />
  	<Helmet>
        <meta charSet="utf-8" />
        <meta name="title" content="Sean Higgins - Skills" />
        <meta name="description" content="Sean Higgins, Software Engineer" />
    </Helmet>
    <Title titleText="Skills" subtitleText="My top programming languages and some projects of mine"/>

    <SkillsSection left_box=<FontAwesomeIcon icon={ faPython } className="fab fa-python icon"/> right_box=<SkillsSectionText text="Automatic Keyword Extractor Used For Note Taking System" text_link="https://github.com/sean-m-higgins/ZTextMiningPy"/> />	
    <SkillsSection left_box=<FontAwesomeIcon icon={ faPython } className="fab fa-python icon"/> right_box=<SkillsSectionText text="hee2"/> />	
    <SkillsSection left_box=<SkillsSectionText text="hee3"/> right_box=<FontAwesomeIcon icon={ faRProject } className="fab fa-r-project icon"/> />
 	<SkillsSection left_box=<FontAwesomeIcon icon={ faJs } className="fab fa-js icon"/> right_box=<SkillsSectionText text="hee4"/> />	 
  </Layout>
)

export default Skills
