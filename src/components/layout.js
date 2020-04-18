/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Bar from "./bar"
import "./layout.css"
import ScrollingWrapper from "./container_scrolling"

import 'bootstrap/dist/css/bootstrap.min.css';

const Content = styled.div`
  padding: 2rem;
  background-color: #fffff2;
`

const Layout = ({ children }) => {

  return (
    <>
      <Bar>
          <Content>
            <ScrollingWrapper>
              <main>{children}</main>
            </ScrollingWrapper>
          </Content>
      </Bar>  
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
