/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    disableOptimizedLoading: true, // Disables font optimization
    forceSwcTransforms: true, // Forces SWC instead of Babel
    optimizeCss: false, // Disables CSS optimizations that use LightningCSS
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      // Explicitly ignore LightningCSS
      "lightningcss": false,
      "lightningcss-loader": false
    };
    return config;
  }
}