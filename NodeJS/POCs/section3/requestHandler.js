
const fs = require('fs');
const msgBody = [];


const func = function reqListner(req,res) {
    //console.log("incoming request from "+req.url);
    // process.exit(); --> this will exit the server process

    if(req.url === '/favicon.ico') {
        console.log('---------');
        return;
    }

    if(req.url === '/') {
        res.setHeader('Content-Type','text/html');
        res.write('<html><head><h2>response from server</h2></head>');
        res.write('<body><form action="/redirection" method="POST">');
        res.write('<input type="text" name="x"><button type="submit">Send</button></form></body></html>');
        return res.end();
    }

    if(req.url === '/redirection' && req.method === 'POST') {
        //redirect to / and create a new file with the message that was submitted
        req.on('data', (chunks) => {
            console.log(chunks);
            console.log(chunks.toString());
            msgBody.push(chunks);
        });
        //?? why does the statement below have return? why does it prevent lines 46-49 from being executed
        return req.on('end',() => {
            console.log('inside end listner');
            fs.writeFileSync('messagefile.txt',msgBody.toString());
            console.log('setting status code');
            res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end();
        });
        /*fs.writeFileSync('messagefile.txt',msgBody.toString());
        if this is written outside of end listener, it will be executed before the function inside
        end listner or data listner gets called. And hence the content of the file will be empty.
        Therefore it has to be moved inside end so that its executed only when data reading is finished.
        */
    }

    console.log('setting header');
    res.setHeader('Content-Type','text/html');
    res.write('<html><head><h2>Default response from server</h2></head></html>');
    res.end();   
}

module.exports = func;