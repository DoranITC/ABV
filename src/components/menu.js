import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const AllTheBits = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 25em;
`

const Menu = () => {
  return (
    <div>
      <AllTheBits>
        <h1>Automated Bag Valve Mask (ABVM) Ventilator</h1>
        <h2>Open Source</h2>
        <h2>Low Cost Design</h2>
        <Link to="/">Project Overview</Link>
        <Link to="/download">Download CAD and Drawings</Link>
        <Link to="/help">How You Can Help</Link>
        <Link to="/contact">Contact Us</Link>
      </AllTheBits>
    </div>
  )
}

export default Menu