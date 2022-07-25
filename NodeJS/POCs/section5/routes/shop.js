const express = require('express');
const path = require('path');
const rootPath = require('../util/root_path');

const router = express.Router();

router.get('/',(req,res,next) => {
    res.sendFile(path.join(rootPath,'views','shop.html'));
   // res.send('<html><head><h1>Default Page</h1></head></html>');
});

//if we choose use, then the order in which middlewares are written matter. In case we
//we choose any http method like get, post etc then exact matching of the url is done
//otherwise when we use 'use', exact matching is not done 

module.exports = router;