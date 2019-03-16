module.exports = {
  siteMetadata: {
    title: `The Bible Is`,
    description: `Growing Faith.`,
    author: `Caleb McHenry`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `articles`,
        path: `${__dirname}/src/pages/articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `charts`,
        path: `${__dirname}/src/pages/charts`,
      },
    },
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Bible Is`,
        short_name: `The Bible Is`,
        start_url: `/`,
        background_color: `#080899`,
        theme_color: `#080899`,
        display: `minimal-ui`,
        icon: `src/images/TheBibleIsLogo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify-cms`,
  ],
};
