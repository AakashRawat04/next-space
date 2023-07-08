/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				port: "",
				hostname: "avatars.githubusercontent.com",
				pathname: "/u/**",
			},
		],
	},
};

module.exports = nextConfig;
