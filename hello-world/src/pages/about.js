import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: "teal" }}>
    <Link to="/contact/">コンタクト</Link>
    <Header headerText="アイフル" arbitraryPhrase="任意のフレーズ" />
    <Header headerText="ホテル" />
    <p>山ノ内</p>
  </div>
)
