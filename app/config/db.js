// Connection config for MySQL

module.exports = {
    development: {
        database: "first",
        username: "kuro",
        password: "kuro",
        host: "3.82.215.227",
        // host: "127.0.0.1",
        dialect: "mysql",
        dialectModule: require("mysql2"),
        port: "3306",
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