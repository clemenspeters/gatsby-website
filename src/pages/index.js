import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Clemens Peters</h1>
    <p>Welcome my website.</p>
    <p>Let's keep it DRY for now.</p>
    <div class="image-container">
      <Image />
    </div>
  </Layout>
)

export default IndexPage
