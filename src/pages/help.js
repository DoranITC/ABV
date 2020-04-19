import React from "react"

import Layout from "../components/layout"
import Help from "../components/Help/help"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';

const HelpPage = () => (
    <Layout>
      <SEO title="How to Help" />
      <Help></Help>
    </Layout>
)

export default HelpPage
