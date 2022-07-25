
const http = require('http');
const reqListner = require('./requestHandler');
const server = http.createServer(reqListner);
console.log("listning on port 3000!");
server.listen(3000);
