
const express = require('express');
const analyticsRouter = express.Router();
const analyticsController = require('../controllers/analyticsController');

analyticsRouter.get('/getall',analyticsController.analytics_get_all);


module.exports = analyticsRouter;