import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>props.excerpt</p>
    </div>
  </div>
)

export default () => (
  <Container>
    <h1>About CSS Modules</h1>
    <p>CSS Modules are cool</p>
    <User
      username="Jane Doe"
      avatar="https://previews.123rf.com/images/jemastock/jemastock1708/jemastock170807790/83959223-%E7%94%B7%E3%82%A2%E3%83%90%E3%82%BF%E3%83%BC-%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E7%94%BB%E5%83%8F%E3%83%99%E3%82%AF%E3%83%88%E3%83%AB-%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88-%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Bob Smith"
      avatar="https://png.pngtree.com/element_our/20190602/ourlarge/pngtree-cartoon-monster-avatar-illustration-image_1411001.jpg"
      excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Container>
)
