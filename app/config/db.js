// Connection config for MySQL

module.exports = {
    development: {
        database: "gramediaschool_db",
        username: "root",
        password: "root",
        // host: "3.82.215.227",
        host: "127.0.0.1",
        dialect: "mysql",
        dialectModule: require("mysql2"),
        port: "8889",
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    },
}