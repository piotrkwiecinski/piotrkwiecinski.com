const siteUrl = new URL(`https://piotrkwiecinski.com`)

module.exports = {
  siteMetadata: {
    siteUrl: siteUrl.href.slice(0, -1),
    title: `Piort Kwiecinski`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: `piotrkwiecinski.com`,
        hostname: siteUrl.hostname,
        protocol: siteUrl.protocol.slice(0, -1),
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteUrl.href.slice(0, -1),
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: { id: `GTM-P7K638`, includeInDevelopment: false },
    },
  ],
}
