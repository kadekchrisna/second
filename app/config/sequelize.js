const Sequelize = require('sequelize');
const dbConfig = require('./db');
const env = process.env.NODE_ENV ? process.env.NODE_ENV : "development";
const db = dbConfig[env];

const sequelize = new Sequelize(db.database, db.username, db.password, {
    host: db.host,
    port: db.port,
    dialect: db.dialect,
    pool: db.pool,
});
module.exports = sequelize;