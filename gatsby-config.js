/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `KUROBO NOTE`,
    description: `KUROBOの理解したこととか色々忘れないようにメモするサイト`,
    lang: `ja`,
    siteUrl: `https://kurobo-note.netlify.app/`,
    locale: `ja_JP`,
    fbappid: `956280135227599`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `KUROBO NOTE KUROBOの学習ノート`,
        short_name: `KUROBO NOTE`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#00695c`,
        display: `standalone`,
        icon: `src/image/kurobo.svg`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.microCMS_API_KEY,
        serviceId: "kurobo-note",
        apis: [
          {
            endpoint: "blog",
          },
          {
            endpoint: "category",
          },
          {
            endpoint: "tag",
          },
        ],
      },
    },
  ],
}
