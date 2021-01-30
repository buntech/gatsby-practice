import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: "purple" }}>
    <Link to="/contact/">コンタクト</Link>
    <Header headerText="こんちは" arbitraryPhrase="任意のフレーズ" />
    <p>study</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)
