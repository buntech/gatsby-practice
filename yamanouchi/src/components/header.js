import { Link } from "gatsby"
import React from "react"

const Header = () => {
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           user {
  //             name
  //           }
  //         }
  //       }
  //     }
  //   `
  // )

  return (
    <header>
      {/* <h2>{data.site.siteMetadata.user.name}</h2> */}
      <nav>
        <ul>
          <li>
            <Link to="/">TOP</Link>
          </li>
          <li>
            <Link to="/facility">施設案内</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
