module.exports = {
  pathPrefix: '/fpv-drone-list',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-csv`,
    `gatsby-plugin-sass`,
  ],
}
