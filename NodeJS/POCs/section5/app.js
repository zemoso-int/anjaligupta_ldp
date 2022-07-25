const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');


const rootPath = require('./util/root_path');

const expFunc = express();
expFunc.listen(3000);
console.log('Listning on port 3000');

//read static files 
expFunc.use(express.static(path.join(__dirname, 'public')));

//parsing the body
expFunc.use(bodyParser.urlencoded({ extended: true }));

//1st level filtering on basis of url
expFunc.use('/admin',adminRoutes);

expFunc.use(shopRoutes);

//send status of response and send the html file that has to be rendered
expFunc.use((req,res,next) => {
    res.status(404).sendFile(path.join(rootPath,'views','page-not-found.html'));
   // res.status(404).send('<h1>404 Page not found</h1>');
})