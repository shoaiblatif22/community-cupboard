const User = require("../models/user");
const express = require('express');
const router = express.Router();
const NotificationController = require('../controllers/NotificationController');


router.post('/notification', NotificationController.Create);

module.exports = router;