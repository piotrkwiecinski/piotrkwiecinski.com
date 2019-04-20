const siteUrl = `https://piotrkwiecinski.com`

module.exports = {
  siteMetadata: {
    siteUrl: siteUrl,
    title: `Piort Kwiecinski`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: { id: `GTM-P7K638`, includeInDevelopment: false },
    },
  ],
}
