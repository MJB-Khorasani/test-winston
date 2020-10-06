const express = require('express');
const router = express.Router();

const userController = require('./userController');

router.get('/', userController.getIndex);

module.exports = router;
