module.exports = {
  siteMetadata: {
    title: "山ノ内",
    author: "aiful Engineer Yusuke Kokubu",
    category: ["hotel", "nagano"],
    user: { name: "Y.K", email: "y.kokubu@pj100.biz" },
  },
  plugins: [
    // 画像表示
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}
