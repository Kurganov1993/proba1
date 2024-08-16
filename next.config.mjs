/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "krasavica.info",
            },
            {
                protocol: "https",
                hostname: "melanaphoto.com",
            },
            {
                protocol: "https",
                hostname: "static.wixstatic.com",
            },
            {
                protocol: "https",
                hostname: "people.pic1.co",
            },
            {
                protocol: "https",
                hostname: "app-uploads-cdn.fera.ai",
            },
        ],
    },
};

export default nextConfig;