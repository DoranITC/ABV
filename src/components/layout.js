/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Bar from "./Sidebar/bar"
// import Toolbar from "./Toolbar/Toolbar"
import "./layout.css"
import ScrollingWrapper from "./ScrollingContainer/ScrollingContainer"

import 'bootstrap/dist/css/bootstrap.min.css';


const Layout = ({ children }) => {

  return (
    <>
        <Bar>
          {/* <Toolbar/> */}
            <div className="content">
                <main>{children}</main>
            </div>
        </Bar>  
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
