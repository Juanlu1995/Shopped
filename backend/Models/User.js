const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
});

UserSchema.statics.findByEmail = function(email) {
    return User.findOne({email: email})
        .then(user => {
            return user
        }).catch(err => {
            console.error(err)
        })
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
