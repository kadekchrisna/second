const Sequelize = require('sequelize');

const sequelize = require('../config/sequelize');

const Message = sequelize.define('messages', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    msg_number: Sequelize.INTEGER,
    msg_status_code: Sequelize.INTEGER,
    msg_server: Sequelize.STRING,
    msg_client: Sequelize.STRING,
    type: Sequelize.INTEGER
});
module.exports = Message;