const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/authController');

authRouter.post('/login',authController.authlogin);

module.exports = authRouter;