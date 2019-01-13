const express = require('express');
const router = express.Router();

const analyticsRoutes =require('./api/routes/analytics');
const projectRoutes = require('./api/routes/project');
const formsRoutes = require('./api/routes/forms');
const calendarRoutes =require('./api/routes/calendar')



router.use('/analytics',analyticsRoutes);
router.use('/project',projectRoutes);
router.use('/forms',formsRoutes);
router.use('/calendar',calendarRoutes);


module.exports = router;