import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Three = () => {
  const data = useStaticQuery(graphql`
    query {
      three: file(relativePath: { eq: "garage/three.jpg" }) {
        childImageSharp {
          fixed(width: 320, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Img fixed={data.three.childImageSharp.fixed} />
}

export default Three