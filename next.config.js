const withPlugins = require('next-compose-plugins');
const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/
});

module.exports = withPlugins(
  [
    withMDX,
    {
      pageExtensions: ['js', 'jsx', 'mdx']
    }
  ],
  {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/next-explore' : ''
  }
);
