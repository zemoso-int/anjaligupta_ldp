const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const bookRoutes = require('./routes/bookRoutes');
const userdataRoutes = require('./routes/userDataRoutes');

const app = express();

console.log('Server up on port 3000');
app.listen(3000);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/book',bookRoutes.routes);
app.use('/user',userdataRoutes.routes);
