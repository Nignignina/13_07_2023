/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@import "./src/scss/all.scss";
  @import "./src/scss/mixins/allmixins.scss";`,
  },
};

module.exports = nextConfig;
