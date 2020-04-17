import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Content from "../components/content"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';

const MasterDiv = styled.div`
  background-color: #fffff2;
`
const IndexPage = () => (
  <MasterDiv>
    <Layout>
      <SEO title="Home" />
      <Content></Content>
    </Layout>
  </MasterDiv>
)

export default IndexPage
