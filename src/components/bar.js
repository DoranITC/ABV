import React from "react"
import PropTypes from "prop-types"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"

const Bar = ({ siteTitle }) => (
  <>
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="images/D.png"
          width="30"
          height="30"
          className="d-inline-block align-center"
        />{' '}
        {siteTitle}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#who">Who am I?</Nav.Link>
          <NavDropdown title="Design" id="basic-nav-dropdown">
            <NavDropdown.Item href="#github">Design Repo</NavDropdown.Item>
            <NavDropdown.Item href="#github/documentation">Documentation</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#somewhere">How to Help</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
)

Bar.propTypes = {
  siteTitle: PropTypes.string,
}

Bar.defaultProps = {
  siteTitle: ``,
}

export default Bar
