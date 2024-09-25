/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MAIL_HOST: process.env.MAIL_HOST,
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASS: process.env.MAIL_PASS,

    API_SECRET: process.env.API_SECRET,
    API_KEY: process.env.API_KEY,
    CLOUD_NAME: process.env.CLOUD_NAME,
  },
};

export default nextConfig;
