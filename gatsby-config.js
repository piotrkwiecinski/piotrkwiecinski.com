const siteUrl = `https://piotrkwiecinski.com`

module.exports = {
  siteMetadata: {
    siteUrl: siteUrl,
    title: `Piort Kwiecinski`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: { id: `GTM-P7K638`, includeInDevelopment: false },
    },
  ],
}
