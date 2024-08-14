/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // other configs...
}

console.log('Environment variables:', {
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  // Log other non-sensitive variables here
});

module.exports = nextConfig