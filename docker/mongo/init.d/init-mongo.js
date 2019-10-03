db.createUser(
    {
        user: "shopped",
        pwd: "shopped",
        roles: [
            {
                role: "readWrite",
                db: "shopped"
            }
        ]
    }
);
