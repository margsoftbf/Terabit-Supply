/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
	experimental: { esmExternals: true },
	images: {
		domains: [
			'images.unsplash.com',
			'upload.wikimedia.org',
			'l3c.cloud',
			'microman.co.zw',
			'www.etp4hpc.eu',
			'm.media-amazon.com',
		],
	},
};
