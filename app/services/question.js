const connection = require('../config/mysql');
const Question = require('../models/Question');

const question = {
    getAll: (callback)=> {
        connection.query("SELECT * FROM question_banks LIMIT 5000", (err, rows, fields)=> {
            callback(err, rows);
        })
    },
    get: async ()=> {
        try {
            return await Question.findAll({limit: 5000});
        } catch (error) {
            throw error;
        }
    } 
}

module.exports = question;