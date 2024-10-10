import createNextIntlPlugin from 'next-intl/plugin'

const widthNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default widthNextIntl(nextConfig);