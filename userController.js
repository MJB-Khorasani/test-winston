const Logger = require('./logger');
const logger = new Logger('user-controller');
const userService = require('./userService');

module.exports.listUser = async (req, res, next) => {
    let users = await userService.listUsers();
    res.json({ users });
};

module.exports.creaetUser = async (req, res, next) => {
    let user = await userService.addUser();
    logger.log('user created', {
        meta: {
            user
        }
    });
    res.json({ user });
};
