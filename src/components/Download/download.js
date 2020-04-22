import React from "react"
import styled from 'styled-components'
import Links from "../Links/links"

const TopBit = styled.div`
  padding-top: 2em;
  padding-left: 2em;
  font-size: 1.3em;
`

const Contact = () => {
  return (<TopBit>
      <h1>Download</h1><br />
      <p>
        Github will hold a .zip archive for each level of design as they're released, containing 3D designs, any 2D drawings, and the white paper explanation of the design.
        Below you'll also find the pdf of the white paper.
      </p>
      <Links />
    </TopBit>)
}

export default Contact