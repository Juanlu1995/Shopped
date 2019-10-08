const express = require('express');
const router = express.Router();
const controller = require('../Controllers/index');

router.get('/', function (req, res, next) {
    controller.user.getAll()
        .then(shops => {
            res.json(shops)
        }).catch(err => {
            console.error(err);
        }
    );
});

router.post('/', function (req, res) {
    controller.user.createUser(req)
        .then(users => {
            res.json(users)
        }).catch(err => {
            console.error(err)
        }
    );
});

module.exports = router;
