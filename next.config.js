/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "lightningcss-loader": false,
      "lightningcss-linux-x64-gnu": false,
      "lightningcss-linux-x64-musl": false
    };
    return config;
  }
}
