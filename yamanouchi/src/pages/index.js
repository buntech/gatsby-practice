import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

export default function TopPage({ data }) {
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  )
}

export const query = graphql`
  {
    markdownRemark {
      html
      frontmatter {
        title
      }
    }
  }
`
