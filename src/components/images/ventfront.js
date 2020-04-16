import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const VentFront = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "vent-front.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(JSON.stringify(data))
  console.log(JSON.stringify(data.placeholderImage))
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default VentFront