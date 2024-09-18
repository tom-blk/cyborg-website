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
  async rewrites() {
    return [
      {
        source: '/demo/:path*',
        destination: 'https://cyborg-connect-chi.vercel.app/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
