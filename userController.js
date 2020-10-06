const Logger = require('./logger');
const logger = new Logger('user-controller');

module.exports.getIndex = (req, res, next) => {
    logger.warn('warning log', {
        meta: {
            'meta': 1
        }
    });

    res.json({ status: 'not ok' });
};
