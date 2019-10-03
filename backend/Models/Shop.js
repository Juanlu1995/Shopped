const mongoose = require('mongoose');

const Shop = mongoose.model(
    'Shop',
    new mongoose.Schema({
        name: String,
        owner: String,
        employees: String,
    })
);

module.exports = Shop;
