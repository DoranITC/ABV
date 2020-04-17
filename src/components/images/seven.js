import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Seven = () => {
  const data = useStaticQuery(graphql`
    query {
      seven: file(relativePath: { eq: "garage/seven.jpg" }) {
        childImageSharp {
          fixed(width: 320, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Img fixed={data.seven.childImageSharp.fixed} />
}

export default Seven