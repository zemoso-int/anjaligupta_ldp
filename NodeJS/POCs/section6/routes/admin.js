const express = require('express');
const path = require('path');
const prodController = require('../controller/productController');


const router = express.Router();

router.get('/add-product',prodController.getAddProduct);
router.post('/add-product',prodController.postAddProduct);

exports.routes = router;