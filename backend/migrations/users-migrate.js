const faker = require('faker');
const {User} = require("../Models/User");

const USERS_TO_CREATE = 500;
const MIGRATION_NAME = 'User migration';

const startMigration = () => {
    console.log(`Starting ${MIGRATION_NAME}`);

    for (i = 0; i < USERS_TO_CREATE; i++) {
        new User({
            name: faker.name.findName(),
            email: faker.internet.email(),
            phone: faker.phone.phoneNumber(),
            address: faker.address.streetName(),
        }).save();
    }

    console.log(`Finishing ${MIGRATION_NAME}`);
};

module.exports = {startMigration};