const express = require('express');
const dynamicRouter =  express.Router();
const dynamicController = require('../controllers/dynamicController');

dynamicRouter.get('/dynamic',dynamicController.employee_getAll)

module.exports = dynamicRouter;