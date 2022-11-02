/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'billink3.blob.core.windows.net',
				port: '',
				pathname: '/blob5/image/2212/thumb/**',
			},
			{
				protocol: 'https',
				hostname: 'billink.no',
				port: '',
				pathname: '/image/2212/thumb/**',
			},
			{
				protocol: 'https',
				hostname: 'billink3.blob.core.windows.net',
				port: '',
				pathname: '/blob5/image/2212/annonser/**',
			},
			{
				protocol: 'https',
				hostname: 'billink.no',
				port: '',
				pathname: '/image/2212/annonser/**',
			},
		],
	},
};

module.exports = nextConfig;
