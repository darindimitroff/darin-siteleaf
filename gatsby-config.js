module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [`gatsby-plugin-react-helmet`, {
    resolve: `gatsby-source-prismic`,
    options: {
      repositoryName: `darindimitroffcom`,
      accessToken: `MC5XZGpIOVNJQUFDZUhMSUVz.KHPvv71C77-9dO-_vQDvv73vv71o77-977-9Qyvvv70X77-977-977-9R0soAEpj77-9J--_ve-_vT7vv70`,
    },
  }, ],
}