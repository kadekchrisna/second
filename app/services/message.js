const connection = require('../config/mysql');
const Message = require('../models/Message');


const message = {
    getAll: (message, callback) => {
        if (connection) {
            connection.query("SELECT * FROM messages WHERE messages.msg_number = ?", message, (err, rows, fields) => {
                callback(err, rows[0]);
            })
        }
    },
    get: async (message) => {
        try {
            return await Message.findAll({ where: { msg_number: message } });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = message;