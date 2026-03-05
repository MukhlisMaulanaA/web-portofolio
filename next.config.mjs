/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
