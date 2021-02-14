import React from "react"
import "./css/layout.css"
import Footer from "./footer"
import Header from "./header"

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
