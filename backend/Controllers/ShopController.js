const Shop = require("../Models/Shop");

const createShop = (req) => {
    const shop = new Shop({
        name: req.body.name,
        owner: req.body.owner,
        employees: req.body.employees,
    });
    shop.save((err) => {
        if (err) {
            return handleError(err);
        }
    });
    res.send(getAll());
};

const getAll = (req) => {
    Shop.find({}, function (err, shops) {
        console.log(shops);
    });
};

const ShopController = {
    createShop,
    getAll
};

module.exports = ShopController;
