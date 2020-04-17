import React from "react"
import Img from 'gatsby-image'
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const AllTheBits = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  width: 30em;
  padding-top: 10vh;
`

const Menu = () => {
  const ventpic = useStaticQuery(graphql`
      query {
        file(relativePath: { eq: "garage/one.jpg" }) {
          childImageSharp {
            fixed(width: 320, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `)

  return (
    <div>
      <AllTheBits>
        <h1>Automated Bag Valve</h1>
        <h1>Mask (ABVM) Ventilator</h1>
        <h2 style={{fontSize: `2em`}}>Open Source</h2>
        <h2 style={{fontSize: `2em`}}>Low Cost Design</h2>
        <br/>
        <Link to="/"><h3>Project Overview</h3></Link>
        <Link to="/garage/garage_2020APR17.zip"><h3>Download CAD and Drawings</h3></Link>
        <Link to="/help"><h3>How You Can Help</h3></Link>
        <Link to="/contact"><h3>Contact Us</h3></Link>
        <Img fixed={ventpic.file.childImageSharp.fixed} />
      </AllTheBits>
    </div>
  )
}

export default Menu