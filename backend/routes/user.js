//user routes
const User = require("../../models/user");
const express = require('express');
const router = express.Router();
const userController = require('../controllers/UsersController');


router.post('/register', userController.Create);

module.exports = router;