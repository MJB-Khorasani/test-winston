const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

var _db;

async function connect(logger) {
    let client = await MongoClient.connect('mongodb://127.0.0.1:27017/test-winston?retryWrite=true', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    _db = client.db();
    logger.info('MongoDB database connected', {
        meta: {
            connectionString: 'mongodb://127.0.0.1:2701/test-winston?retryWrite=true'
        }
    });

    return _db;
};

function getDb() {
    return _db ? _db : null;
};

module.exports = {
    connect, 
    getDb
};
