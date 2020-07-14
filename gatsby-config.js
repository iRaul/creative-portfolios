module.exports = {
  siteMetadata: {
    title: 'Creative Portfolios',
    author: 'Raul Dronca',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-scroll-reveal',  
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-video',
            options: {
              width: '100%',
              height: 'auto',
              preload: 'auto',
              muted: true,
              autoplay: true,
              loop: true,
            },
          },
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-plugin-styled-components`,
          },
        ],
      },
    },
  ],
}
