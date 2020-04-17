import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Four = () => {
  const data = useStaticQuery(graphql`
    query {
      four: file(relativePath: { eq: "garage/four.jpg" }) {
        childImageSharp {
          fixed(width: 320, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Img fixed={data.four.childImageSharp.fixed} />
}

export default Four