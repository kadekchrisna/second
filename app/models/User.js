const Sequelize = require('sequelize');

const sequelize = require('../config/sequelize');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: Sequelize.STRING
}, {
        timestamps: false,
    })
module.exports = User;