/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
	experimental: { esmExternals: true },
	images: {
		remotePatterns: [
			{ hostname: 'images.unsplash.com' },
			{ hostname: 'upload.wikimedia.org' },
			{ hostname: 'l3c.cloud' },
			{ hostname: 'microman.co.zw' },
			{ hostname: 'www.etp4hpc.eu' },
			{ hostname: 'm.media-amazon.com' },
		],
	},
};
