const express = require('express');
const router = express.Router();
const controller = require( '../Controllers/index');

router.get('/', function (req, res, next) {
    res.send("user");
});

router.post('/', function (req, res) {
    const users = controller.user.createUser(req);

    res.toJson(users);
});

module.exports = router;
