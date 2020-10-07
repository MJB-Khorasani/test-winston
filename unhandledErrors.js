module.exports.configure = (logger) => {
    process.on('unhandledRejection', error => {
        if (error.name.match(/MongoParseError|MongoServerSelectionError/)) {
            // send mail here or in the express default error handler
        };
        logger.error('Unhandled promise rejection', {
            meta: {
                "timestamp": new Date().toLocaleString(),
                "errorName": error.name,
                "errorMessage": error.message,
                "errorStack": error.stack
           }
        });
    });
    process.on('uncaughtException', error => {
        logger.error('Uncaught error occured', {
            meta: {
                "timestamp": new Date().toLocaleString(),
                "errorName": error.name,
                "errorMessage": error.message,
                "errorStack": error.stack
            }
        });
    });
};
