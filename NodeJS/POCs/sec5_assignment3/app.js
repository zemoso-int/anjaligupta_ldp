const express = require('express');
const path = require('path');
const userRoute = require('./routes/userRoutes');
const defaultRoute = require('./routes/defaultRoutes');
const rootPath = require('./util/rootPath');

const expFunc = express();
expFunc.listen(3000);
console.log("Server up on port 3000");

expFunc.use(express.static(path.join(rootPath,'public')));

expFunc.use(userRoute);
expFunc.use(defaultRoute);

expFunc.use((req,res,next) => {
    res.status(404).sendFile(path.join(rootPath,'view','page-not-found.html'));
});