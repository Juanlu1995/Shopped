const express = require('express');
const router = express.Router();
const shopRouter = require('./shopRouter');

/* GET home page. */
router.get('/', function(req, res, next) {
    return res.send("hola");
});

router.use('/shop', shopRouter);

module.exports = router;
