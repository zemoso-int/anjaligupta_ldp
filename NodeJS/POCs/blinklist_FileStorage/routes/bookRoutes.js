const express = require('express');
const path = require('path');
const bookController = require('../controller/bookController');

const router = express.Router();

router.post('/create',bookController.postCreateBook);
router.get('/search',bookController.getSearchBook);

exports.routes = router;