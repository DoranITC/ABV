import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Doran</h1>
    <div style={{ maxWidth: `70vw` }}>
      <Image ventilator/>
    </div>
    <Link to="/ventilator">Ventilator design</Link>
  </Layout>
)

export default IndexPage
