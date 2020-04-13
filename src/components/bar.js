import React from "react"
import PropTypes from "prop-types"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Bar = ({ siteTitle }) => {
  return <>
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="#home">
        {siteTitle}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Design" id="basic-nav-dropdown">
            <NavDropdown.Item href="#prototypes">Prototypes</NavDropdown.Item>
            <NavDropdown.Item href="#github">Design Repo</NavDropdown.Item>
            <NavDropdown.Item href="#github/documentation">Documentation</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#help">How to Help</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav classname="ml-auto">
        <Nav.Link href="#who">Who am I?</Nav.Link>
      </Nav>
        
    </Navbar>
  </>
}

Bar.propTypes = {
  siteTitle: PropTypes.string,
}

Bar.defaultProps = {
  siteTitle: ``,
}

export default Bar
