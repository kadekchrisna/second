const User = require('../models/User');

exports.getAllUsers = async() => {
    try {
        return await User.findAll();
    } catch (error) {
        throw error;
    }
};