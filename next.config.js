/** @type {import('next').NextConfig} */
const webpack = require("webpack");

const nextConfig = {
  reactStrictMode: true,

  experimental: {
    optimizeCss: true,
  },

  webpack: (config) => {
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
