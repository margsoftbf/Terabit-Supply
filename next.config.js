/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
	experimental: { esmExternals: true },
	images: {
		domains: ['images.unsplash.com', 'netlify.app'],
	},
};
