module.exports = {
  siteMetadata: {
    title: 'Din Ou',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
