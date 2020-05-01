/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "../styles/layout.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          <div class="outerBox">
            <ul>
              <li class="listItem"><a href="https://github.com/sean-m-higgins"><FontAwesomeIcon icon={ faGithub } className="inner-about-contact" /></a></li>
              <li class="listItem"><a href="https://www.linkedin.com/in/sean-m-higgins20/"><FontAwesomeIcon icon={ faLinkedin } className="inner-about-contact" /></a></li>
              <li class="listItem"><a href="mailto:shiggins@luc.edu?subject=Person Website Inquiry"><FontAwesomeIcon icon={ faEnvelope } className="inner-about-contact" /></a></li>
              <li class="listItem"><a href="https://www.instagram.com/hazy.lens/"><FontAwesomeIcon icon={ faInstagram } className="inner-about-contact" /></a></li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

