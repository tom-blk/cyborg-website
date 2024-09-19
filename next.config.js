/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
  async redirects() {
    return [
      {
        source: '/demo',
        destination: 'https://www.demo.cyborgnetwork.io/',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
