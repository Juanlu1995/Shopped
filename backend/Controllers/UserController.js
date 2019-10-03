const User = require("../Models/User");

const createUser = (req) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
    });
    user.save((err) => {
        if (err) {
            return handleError(err);
        }
    });
    res.send(getAll());
};

const getAll = (req) => {
    User.find({}, function (err, shops) {
        console.log(shops);
    });
};

const UserController = {
    createUser,
    getAll
};

module.exports = UserController;
