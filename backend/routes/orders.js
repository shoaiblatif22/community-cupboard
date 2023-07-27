const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order');

// Create a new order
router.post('/create', orderController.Create);

// Add more order routes here if needed

module.exports = router;


  