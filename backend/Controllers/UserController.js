const {User} = require("../Models/User");

/**
 * Insert a User and return all users
 * @param req request
 * @returns {Promise<User>}
 */
const createUser = (req) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
    });
    return user.save()
        .then(() => {
            return getAll();
        })
        .catch((err) => {
            console.error(err);
        });
};

/**
 * Get all Users
 * @returns {Promise<User>}
 */
const getAll = (req) => {
    return User.find({})
        .then((users) => {
            return users
        })
        .catch((err) => {
            console.error(err)
        });
};

/**
 * All controller for User
 * @type {{getAll: *, createUser: *}}
 */
const UserController = {
    createUser,
    getAll
};

module.exports = UserController;
