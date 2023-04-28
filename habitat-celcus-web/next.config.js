/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["tr", "en"],
    defaultLocale: "en",
    localeDetection: true,
  },
  async rewrites() {
    return [
      {
        source: "/iletisim",
        destination: "/contact",
      },
    ];
  },
};

module.exports = nextConfig;
