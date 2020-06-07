import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Clemens Peters</h1>
    <div class="image-container">
      <Image />
    </div>
    <p>Welcome my website.</p>
    <p>Let's keep it DRY for now.</p>
  </Layout>
)

export default IndexPage
