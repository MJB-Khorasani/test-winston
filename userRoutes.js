const express = require('express');
const router = express.Router();

const userController = require('./userController');
const { asyncMiddlewareHandler } = require('./promise');

router.get('/', asyncMiddlewareHandler(userController.listUser));
router.post('/', asyncMiddlewareHandler(userController.createUser));

module.exports = router;
