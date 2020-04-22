import React from "react"

import Layout from "../components/layout"
import Download from "../components/Download/download"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';

const DownloadPage = () => (
    <Layout>
      <SEO title="How to Help" />
      <Download></Download>
    </Layout>
)

export default DownloadPage
