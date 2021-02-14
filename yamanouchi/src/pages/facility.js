import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout.js"

const Facility = ({ data }) => {
  // console.log(data)
  return (
    <div>
      <Layout>
        {/* <h2>{data.site.siteMetadata.author}</h2> */}
        <h1>Facility Page</h1>
        <table>
          <thead>
            <tr>
              <th>パス</th>
              <th>サイズ</th>
              <th>作成時間</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.nodes.map(node => (
              <tr>
                <td>{node.relativePath}</td>
                <td>{node.size}</td>
                <td>{node.ctime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout>
    </div>
  )
}

export const query = graphql`
  {
    allFile {
      totalCount
      nodes {
        ctime
        extension
        name
        relativePath
        size
      }
    }
  }
`

export default Facility
