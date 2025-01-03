import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        turbo: {
            rules: {
                "*.svg": {
                    loaders: ["@svgr/webpack"],
                    as: "*.js",
                },
            },
        },
    },
    reactStrictMode: false,
};

export default nextConfig;
