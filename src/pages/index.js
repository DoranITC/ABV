import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Content from "../components/content"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content></Content>
    <Link to="/ventilator">Ventilator design</Link>
  </Layout>
)

export default IndexPage
