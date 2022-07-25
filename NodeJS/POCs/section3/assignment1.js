const http = require('http');
const data = [];
const server = http.createServer((req,resp) => {

    if(req.url === '/') {

        resp.write('<html><head><h2>Welcome to my page!</h2></head>');
        resp.write('<body><form method="POST" action="/create-users">');
        resp.write('<input type="text" name="username"><button type="submit">Send');
        resp.write('</button></form></body></html>');
        resp.end();

    } else if(req.url == '/users') {
        resp.write('<html><head><h2>Welcome to my page!</h2></head>');
        resp.write('<body><ul><li>user1</li><li>user2</li></ul></body></html>');
        resp.end();

    } else if (req.url === '/create-users' && req.method === 'POST'){

        req.on('data',(chunks) => {
            data.push(chunks.toString());
            // console.log("in data listner");
            // console.log( ...data);
        });

        return req.on('end',()=>{
            console.log("in end listner");
            console.log(...data);
            resp.setHeader('Location','/');
            resp.statusCode = 302;
            resp.end();
        });

    }  else {
        console.log("--------");
    }
}

);
console.log('Server is up at port 3001');
server.listen(3001);