/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
module.exports = {
  env: {
    MYSQL_HOST: "127.0.0.1",
    MYSQL_PORT: 3306,
    MYSQL_DATABASE: "dev",
    MYSQL_USER: "dev01",
    MYSQL_PASSWORD: "1234",
  },
};
