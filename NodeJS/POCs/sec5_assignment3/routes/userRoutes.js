const express = require('express');
const path = require('path');
const rootPath = require('../util/rootPath'); //todo


const router = express.Router();

router.get('/user',(req,res,next)=>{
    res.sendFile(path.join(rootPath,'view','defaultUser.html'));
});

module.exports = router;