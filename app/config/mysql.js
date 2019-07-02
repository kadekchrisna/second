const mysql = require('mysql2');

const dbConfig = require('./db');
const env = process.env.NODE_ENV ? process.env.NODE_ENV : "development";
const db = dbConfig[env];

const connection = mysql.createPool({
    host: db.host,
    port: db.port,
    user: db.username,
    password: db.password,
    database: db.database,
    waitForConnections: db.waitForConnections,
    connectionLimit: db.connectionLimit,
    queueLimit: db.queueLimit
})

module.exports = connection;