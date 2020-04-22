import React from "react"
import styled from 'styled-components'
import Links from "../links"

const TopBit = styled.div`
  padding-top: 2em;
  padding-left: 2em;
  font-size: 1.3em;
`

const Contact = () => {
  return (<TopBit>
      <p>You can find the design files in several places, <a href="__blank">Github</a> will hold release tags for each level of design

      </p>
      <Links />
    </TopBit>)
}

export default Contact