const Logger = require('./logger');
const logger = new Logger('admin-controller');

module.exports.getIndex = (req, res, next) => {
    logger.info('some info from here', {
        meta: {
            hero: 'come'
        }
    });

    res.json({ status: 'ok' });
};
