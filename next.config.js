/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // other configs...
}

console.log('All environment variables:', Object.keys(process.env));
console.log('NEXT_PUBLIC variables:', Object.keys(process.env).filter(key => key.startsWith('NEXT_PUBLIC_')));

module.exports = nextConfig