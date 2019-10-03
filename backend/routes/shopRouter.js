const express = require('express');
const router = express.Router();
const controller = require( '../Controllers/index');

router.get('/', function (req, res, next) {
    res.send("shop");
});

router.post('/', function (req, res) {
    const shops = controller.shop.createShop(req);

    res.toJson(shops);
});

module.exports = router;
