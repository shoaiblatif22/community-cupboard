const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/products');

router.post('/create', ProductController.Create);

module.exports = router;
