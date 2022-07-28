const fs = require('fs');
const path = require('path');
const filePath = path.join(path.dirname(require.main.filename),'data','userData.json');


let p = new Promise( (resolve,reject) => {
    fs.readFile(filePath, (err,rawFileData) => {
        if(err) {
            console.log("An error occurred in reading:- ",err);
            resolve([]);
        } else {
            var fileData = JSON.parse(rawFileData);
            resolve(fileData);
        }
    });
    
}) ;

module.exports = {p};
