import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Image />
    <p>Welcome my website</p>
    <p>Let's keep it DRY for now</p>
    <p>Please use social icons to contact me</p>
  </Layout>
)

export default IndexPage
