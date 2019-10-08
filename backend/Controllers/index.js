const ShopController = require('./ShopController');
const UserController = require('./UserController');

const controller = {
    shop: ShopController,
    user: UserController
};

module.exports = controller;
