// Connection config for Redis

module.exports = {
    development: {
        host: process.env.REDIS_HOST || '34.230.2.66',
        port: process.env.REDIS_PORT || 6379,
        options: {
            db: 0
        },
        auth_pass: process.env.REDIS_PASSWORD || ''
    }
}
