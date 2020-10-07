const Logger = require('./logger');
const logger = new Logger('express-error-handler');

module.exports.notFound = (req, res, next) => {
    logger.warn('Page not found', {
        meta: {
            "ip": req.ip,
            "method": req.method,
            "originalUrl": req.originalUrl,
            "userAgent": req.get('user-agent'),
        }
    });
    res.status(404).json({
        meta: {
            'messages': ['Page not found'],
            'path': req.originalUrl
        }
    });
};

module.exports.internalError = (error, req, res, next) => {
    // all errors comes here
    // you can send email or whatssapp message
    logger.error('Internal server error', {
        meta: {
            "method": req.method ? req.method : null,
            "originalUrl": req.originalUrl ? req.originalUrl : null,
            "ip": req.ip ? req.ip : null,
            "userAgent": req.get('user-agent'),
            "errorName": error.name,
            "errorMessage": error.message,
            "errorMessages": error.messages,
            "errorStack": error.stack,
        }
    });
    res.status(500).json({
        meta: {
            'messages': [error.message]
        }
    });
};
