const {Shop} = require("../Models/Shop");
const User = require("../Models/User");

/**
 * Insert a Shop and return all shops
 * @param req request
 * @returns {Promise<Shops>}
 */
const createShop = (req) => {
    return User.findByEmail(req.body.ownerEmail)
        .then((owner) => {
            console.log(owner);
            const shop = new Shop({
                name: req.body.name,
                owner: owner._id || null,
                employees: null,
            });
            return shop.save()
                .then(() => {
                    return getAll();
                })
        }).catch((err) => {
            console.error(err)
        }
    );
};

/**
 * Get all Shops
 * @returns {Promise<Shop>}
 */
const getAll = () => {
    return Shop
        .find({})
        .then((shops) => {
            return shops
        })
        .catch((err) => {
            console.error(err)
        });
};

const ShopController = {
    createShop,
    getAll
};

module.exports = ShopController;
