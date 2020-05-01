import React from "react"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"
import Section from "../components/section"
import "../styles/text.css"

const Portfolio = () => (
  <Layout>
  	<SEO title="Sean Higgins - Portfolio" />
  	<Helmet>
        <meta charSet="utf-8" />
        <meta name="title" content="Sean Higgins - Portfolio" />
        <meta name="description" content="Sean Higgins, Software Engineer" />
    </Helmet>
    <Title titleText="Portfolio" subtitleText="Encompassing my previous experiences"/>
    
    <div>
    	<h1 id="outerTitle">Work Experience</h1>
    	<div>
    		<Section sectionTitle="Kemper" subtitle="Data Engineer | November 2019 - Present" more_here_link="https://www.kemper.com" paraText="..."/>
    		<Section sectionTitle="Natural Language Processing Lab, Loyola University Chicago" subtitle="Research Assistant | January 2020-Present | Dmitriy Dligach" more_here_link="http://www.dmitriydligach.com/research" paraText="..."/>
    		<Section sectionTitle="Software Systems Laboratory, Loyola University Chicago" subtitle="Research Assistant | December 2018-Present | George Thiruvathukal" more_here_link="https://ssl.cs.luc.edu" paraText="Presented in weekly team meetings discussing our project, a scholarly note-taking service utilizing Google APIs. Researched ML/DL and Multi-label Classification on text analysis to create auto-labels from a small dataset. Partnered with a mentor to work 1-on-1 via paired programming to develop Machine Learning (ML) algorithms."/>
    		<Section sectionTitle="TransUnion" subtitle="Salesforce Project Management Intern | May-December 2018" more_here_link="https://www.transunion.com" paraText="Lead the Sales Automation team in preparing and executing the company-wide transition to Salesforce Lightning. Developed the skills of a Salesforce Admin learning over 45 Trailhead badges and specific TU standard procedures. Contributed in team decisions on creating, updating, or fixing automation in Salesforce for 2500+ global users. Designed a process of prioritization for the team’s cases, reducing and resolving the backlog of user requests."/>
    		<Section sectionTitle="Rambler Investment Fund, Quinlan School of Business" subtitle="Junior Analyst | January-May 2018" more_here_link="https://www.linkedin.com/company/rambler-investment-fund/" paraText="Selected to be a junior analyst in a student managed multi-strategy global macro fund with an AUM of ~$1,000,000. Pitched ABBV to investors after a semester of research and analysis concluding with a complete equity report."/>
    		<Section sectionTitle="Institute for Environmental Sustainability, Loyola University Chicago" subtitle="Consulting Intern | January-May 2019" more_here_link="" paraText="Reported on the current waste management systems of Chicago and Berlin with comparative PESTEL analyses. Developed expertise on waste management practices, and provided an alternate solution to the current crisis. "/>
    		<Section sectionTitle="Undergraduate Admissions Office" subtitle="Student Ambassador | September 2016-May 2018" more_here_link="https://www.luc.edu/undergrad/" paraText="Guided 90 minute tours of both campuses 5 times a week to inform prospective students about the university. Mentored 5-10 seniors via weekly emails, open houses, and special events to help make their college transition easier."/>
    	</div>
    	<h1 id="outerTitle">Education</h1>
    	<div>
    		<Section sectionTitle="Loyola University Chicago" subtitle="M.S. Software Engineering | January 2020-December 2020" more_here_link="https://academics.cs.luc.edu/undergraduate/bsmsprograms.html" paraText="..."/>
    		<Section sectionTitle="Loyola University Chicago" subtitle="B.S. Computer Science | August 2016-December 2019" more_here_link="https://academics.cs.luc.edu/undergraduate/bscs.html" paraText="CUM GPA = 3.55/4.0 | Organizations: Leadership Community, Emerging Leaders Program, Club Tennis, Golden Key International Honors Society, Moot Court, Rambler Investment Fund, Student Ambassador, Future Wolfpack, Delta Sigma Phi, Don't Panic, Software Systems Laboratory"/>
    		<Section sectionTitle="De Smet Jesuit High School" subtitle="High School Diploma | August 2012-May 2016" more_here_link="https://www.desmet.org" paraText="Awards: President's Medal, Pedro Arrupe Service Award"/>
    	</div>
    	<h1 id="outerTitle">Projects</h1>
    	<div>
    		<Section sectionTitle="Metrics Dashboard" subtitle="Software Systems Laboratory | Fall 2019 - Spring 2020" more_here_link="https://ssl.cs.luc.edu/metrics_dashboard.html" paraText=""/>
    		<Section sectionTitle="ZettelGiestG" subtitle="Software Systems Laboratory | Spring 2019" more_here_link="https://ssl.cs.luc.edu/zettelgeist.html" paraText="ZettelGeist is a plaintext note-taking system, inspired by the ZettelKasten Method, which emphasizes one idea per note card. SSL is working to integrate Zettelgeist with the Google Suite of tools to support collaborative research and scholarship."/>
    		<Section sectionTitle="Eagle Scout Project" subtitle="Boy Scouts of America | Fall 2016" more_here_link="/eagle" paraText="Spent 500+ hours leading others in building an ADA approved portable wheelchair ramp for Ride on St. Louis."/>
    	</div>
    </div>
  </Layout>
)

export default Portfolio
