/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Bar from "./bar"
import "./layout.css"
import ScrollingWrapper from "./container_scrolling"

import 'bootstrap/dist/css/bootstrap.min.css';


const Layout = ({ children }) => {

  return (
    <>
      <Bar>
          <div className="content">
            <ScrollingWrapper>
              <main>{children}</main>
            </ScrollingWrapper>
          </div>
      </Bar>  
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
