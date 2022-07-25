const express = require('express');
const path = require('path');
const bookController = require('../controller/userDataController');

const router = express.Router();

router.post('/addBookToList',bookController.postAddBookToList);
router.get('/searchBook',bookController.getSearchBook);
router.post('/updateReadingStatus',bookController.postUpdateReadingStatus);

exports.routes = router;