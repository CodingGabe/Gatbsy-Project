import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <Header headerText="Neato" />
    <p>Such wow. Very React.</p>
  </Layout>
)
// graphGL export for data
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`