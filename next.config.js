/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Enable SWC minification for better performance
  swcMinify: true,
  
  // Enable experimental features
  experimental: {
    // Enable Server Components
    appDir: true,
    
    // Optimize fonts
    optimizeFonts: true,
    
    // Enable modern bundling
    esmExternals: true,
  },
  
  // Compiler options
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Images configuration
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          // Performance headers
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        // Cache static assets for 1 year
        source: '/(_next/static|favicon.ico|robots.txt|sitemap.xml)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Redirects and rewrites
  async redirects() {
    return [
      // Add your redirects here
    ];
  },
  
  // Environment variables available to the browser
  env: {
    SITE_URL: process.env.SITE_URL || 'https://kapilvirenahuja.com',
  },
  
  // Build output
  output: 'standalone',
  
  // Enable source maps in production for better debugging
  productionBrowserSourceMaps: false,
  
  // Webpack configuration
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Production optimizations
    if (!dev && !isServer) {
      // Replace React with Preact in production for smaller bundle
      // Uncomment if you want to use Preact instead of React
      // config.resolve.alias = {
      //   ...config.resolve.alias,
      //   react: 'preact/compat',
      //   'react-dom': 'preact/compat',
      // };
    }
    
    // Bundle analyzer
    if (process.env.ANALYZE) {
      config.plugins.push(
        new webpack.BannerPlugin({
          banner: `Build ID: ${buildId}`,
        })
      );
    }
    
    return config;
  },
  
  // TypeScript configuration
  typescript: {
    // Run type checking in a separate process during build
    ignoreBuildErrors: false,
  },
  
  // ESLint configuration
  eslint: {
    // Run ESLint during build
    ignoreDuringBuilds: false,
    dirs: ['src'],
  },
  
  // Power by header
  poweredByHeader: false,
  
  // Trailing slash
  trailingSlash: false,
  
  // Generate sitemap and robots.txt
  async generateBuildId() {
    // Use git commit hash as build ID
    const { execSync } = require('child_process');
    try {
      return execSync('git rev-parse --short HEAD').toString().trim();
    } catch {
      return `build-${Date.now()}`;
    }
  },
};

module.exports = withBundleAnalyzer(nextConfig);