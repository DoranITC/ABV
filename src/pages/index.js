import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `70vw` }}>
      <h2>What?</h2>
      Low-cost Automated Bag Valve Mask Ventilator. An open source design. 
      <Image ventilator/>

      <h2>Design Philosophy</h2>
        <p>Some content here</p>

      <h2>Prototypes</h2>
        <p>some content</p>

      <h2>Current Problems that Need a Solution</h2>
    </div>
    <Link to="/ventilator">Ventilator design</Link>
  </Layout>
)

export default IndexPage
