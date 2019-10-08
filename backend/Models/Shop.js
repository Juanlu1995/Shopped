const mongoose = require('mongoose');

const Shop = mongoose.model(
    'Shop',
    new mongoose.Schema({
        name: String,
        owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        employees: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    })
);

module.exports = {
    Shop,
};
