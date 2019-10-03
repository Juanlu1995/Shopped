const mongoose = require('mongoose');

const User = new mongoose.model(
    'User',
    new mongoose.Schema({
        name: String,
        email: String,
        phone: String,
        address: String,
    })
);

module.exports = User;
