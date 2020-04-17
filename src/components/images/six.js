import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Six = () => {
  const data = useStaticQuery(graphql`
  query {
    six: file(relativePath: { eq: "garage/garage6.jpg" }) {
      childImageSharp {
        fixed(width: 320, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)
return <Img fixed={data.six.childImageSharp.fixed} />
}

export default Six