const express = require('express');
const path = require('path');
const rootPath = require('../util/root_path');
const prodController = require('../controller/productController');
//const adminData = require('./routes/admin');

const router = express.Router();

router.get('/shop',prodController.getAllProducts);

//if we choose use, then the order in which middlewares are written matter. In case we
//we choose any http method like get, post etc then exact matching of the url is done
//otherwise when we use 'use', exact matching is not done 

module.exports = router;