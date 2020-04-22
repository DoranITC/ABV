import React from "react"
import Img from 'gatsby-image'
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const AllTheBits = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 30em;
  padding-top: 18vh;
`

const Menu = () => {
  const ventpic = useStaticQuery(graphql`
      query {
        file(relativePath: { eq: "garage/Image2.png" }) {
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
        <h1 className="mainTitle">Doran Designs</h1>
        <br/>
        <Link className="mainLink" to="/"><h3>Project Overview</h3></Link>
        <Link className="mainLink" to="/download"><h3>Download CAD and Drawings</h3></Link>
        <Link className="mainLink" to="/help"><h3>How You Can Help</h3></Link>
        <Link className="mainLink" to="/contact"><h3>Contact Us</h3></Link>
        <br />
        <Img fixed={ventpic.file.childImageSharp.fixed} />
      </AllTheBits>
    </div>
  )
}

export default Menu