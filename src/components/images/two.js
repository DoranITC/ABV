import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Two = () => {
  const data = useStaticQuery(graphql`
    query {
      two: file(relativePath: { eq: "garage/two.jpg" }) {
        childImageSharp {
          fixed(width: 320, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Img fixed={data.two.childImageSharp.fixed} />
}

export default Two