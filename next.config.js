/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        compiler: "modern",
        quietDeps: true,
        silenceDeprecations: ["legacy-js-api", "import"]
    },
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "cdn.discordapp.com" },
            { protocol: "https", hostname: "media.discordapp.net" }
        ]
    },
    webpack: (config) => {
        config.ignoreWarnings = [
            ...(config.ignoreWarnings || []),
            (warning) =>
                warning.module?.resource?.includes("@once-ui-system/core") &&
                warning.message?.includes("Sass @import rules are deprecated")
        ];

        return config;
    }
};

module.exports = nextConfig;
