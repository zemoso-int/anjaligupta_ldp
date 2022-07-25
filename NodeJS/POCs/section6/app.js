const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const errorController = require('./controller/errorController');
const exp = require('constants');


const expFunc = express();
//expFunc.set('view engine','pug');
expFunc.listen(3000);
console.log('Listning on port 3000');

expFunc.use(express.static(path.join(__dirname, 'public')));

expFunc.use(bodyParser.urlencoded({ extended: true }));
expFunc.use(bodyParser.json());

expFunc.use('/admin',adminRoutes.routes);
expFunc.use(shopRoutes);
expFunc.use(errorController.error404);