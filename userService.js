const mongodb = require('./mongodb');

module.exports.addUser = async () => {
    let db = mongodb.getDb();
    let {error, user} = await db.collection('users').insertOne({
        name: 'test',
        family: 'testi'
    });

    return user;
};

module.exports.listUsers = async () => {
    let db = mongodb.getDb();
    let {error, users} = await db.collection('users').find({}).toArray();

    return users;
};
