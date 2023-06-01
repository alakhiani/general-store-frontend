require('dotenv').config();

module.exports = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'www.example.com',
            },
        ],
    },
    env: {
        BACKEND_URL: process.env.BACKEND_URL,
        LOG_LEVEL: process.env.LOG_LEVEL,
    },
};
