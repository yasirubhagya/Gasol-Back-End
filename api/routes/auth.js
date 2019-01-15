const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/authController');

authRouter.post('/',authController.authlogin);

module.exports = authRouter;