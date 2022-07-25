const http = require('http');
const express = require('express');
const expFunc = express();

expFunc.listen(3000);
console.log('Listning on port 3000');

/*
expFunc.use((req,res,next)=>{
    console.log('in middleware1');
    next();
});

expFunc.use((req,res,next)=>{
    console.log("in middleware 2");
    res.send('<html><head><h1>Hello</h1></head></html>');
});

*/
expFunc.use('/users',(req,res,next) => {
    res.send('<html><head><h1>Users</h1></head></html>')
});

expFunc.use('/',(req,res,next) => {
    res.send('<html><head><h1>Handler 1</h1></head></html>')
});