const Logger = require('./logger');
const logger = new Logger('app-initialized');

require('./unhandledErrors.js').configure(logger);
require('./mongodb').connect(logger);
const express = require('express');
const app = express();

const errorController = require('./errorController');
const userRoutes = require('./userRoutes');
const adminRoutes = require('./adminRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
app.use(errorController.notFound);
app.use(errorController.internalError);

app.listen(3000, logger.info('server is running on 3000'));

module.exports = app;
