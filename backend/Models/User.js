const mongoose = require('mongoose');

/**
 * User schema
 */
let UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
});

/**
 * Search an user by email
 * @param email String
 * @returns {User || Error}
 */
UserSchema.statics.findByEmail = async function (email) {
    return await User.findOne({email: email})
        .then(user => {
            return user
        }).catch(err => {
            console.error(err)
        })
};

/**
 * Search users by ids
 * @param ids [String] with his ids
 * @returns {Promise<*>}
 */
UserSchema.statics.findById = async function (ids) {
    return await User.find({
        '_id': {
            $in: ids.map(id => mongoose.Types.ObjectId(id))
        }
    })
};

/**
 * User model
 * @type {Model} User
 */
const User = mongoose.model('User', UserSchema);

module.exports = User;
