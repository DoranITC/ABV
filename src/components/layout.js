/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col } from "react-bootstrap"

import Bar from "./bar"
import "./layout.css"
import ScrollingWrapper from "./container_scrolling"

const Content = styled.div`
  padding: 2rem;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
