/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
// import SvgsL from "./svgsl"
// import SvgsR from "./svgsr"
import "../styles/layout.css"

const Layout = ({ children }) => {
  return (
    <div className="container-fluid px-0">
      
      <Header />
      <hr id="header-line"></hr>

      <div className="row no-gutters">
        <div className="col-2 left-box">
          {/* <SvgsL/> */}
        </div>
        <div className="col-8">
          <main className="main-box">{children}</main>
        </div>
        <div className="col-2 right-box">
          {/* <SvgsR/> */}
        </div>
      </div>
      
      <Footer />
      
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

