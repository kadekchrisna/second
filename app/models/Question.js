const Sequelize = require('sequelize');

const sequelize = require('../config/sequelize');

const Question = sequelize.define('question_banks', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    question_code_id: Sequelize.STRING,
    question: Sequelize.TEXT,
    image: Sequelize.STRING,
    audio: Sequelize.STRING,
    answer: Sequelize.STRING,
    multiple_choice: Sequelize.TEXT,
    discussion: Sequelize.TEXT,
    difficulty_level: Sequelize.INTEGER,
    is_active: Sequelize.INTEGER,
    created_by: Sequelize.INTEGER,
    updated_by: Sequelize.INTEGER,
    deleted_at: Sequelize.INTEGER,
    created_at: Sequelize.INTEGER,
    updated_at: Sequelize.INTEGER,
    point: Sequelize.DOUBLE,
    topic: Sequelize.INTEGER,
    position: Sequelize.INTEGER

}, {
        timestamps: false,
    });
module.exports = Question;