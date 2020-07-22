
// const redistPool = require('redis-pool-connection');
const redistPool = require('redis');

const redisConn = require('./redisConn');

const env = process.env.NODE_ENV ? process.env.NODE_ENV : "development";
const redis = redisConn[env];
const redisClient = redistPool.createClient(
    {
        host: redis.host,
        port: redis.port,
        options: redis.options,
        auth_pass: redis.auth_pass
    }
);

module.exports = redisClient;