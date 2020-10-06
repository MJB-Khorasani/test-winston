const express = require('express');
const router = express.Router();

const adminController = require('./adminController');

router.get('/', adminController.getIndex);

module.exports = router;
