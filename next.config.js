const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ipfs.io'],
    dangerouslyAllowSVG: true,
  },
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})

module.exports = nextConfig
