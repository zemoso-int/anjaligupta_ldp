const fs = require('fs');
const path = require('path');
const filePath = path.join(path.dirname(require.main.filename),'data','bookData.json');


readFileData = (callback) => {
    console.log("reading file data");
    fs.readFile(filePath, (err,rawFileData) => {
        if(err) {
            console.log("An error occurred in reading:- ",err);
            callback([]);
        } else {
            console.log('inside else');
            var fileData = JSON.parse(rawFileData);
            callback(fileData);
            //return fileData; => return doesnt work. 
        }
    });
};


let p = new Promise( (resolve,reject) => {
    fs.readFile(filePath, (err,rawFileData) => {
        if(err) {
            console.log("An error occurred in reading:- ",err);
            resolve([]);
        } else {
            var fileData = JSON.parse(rawFileData);
            resolve(fileData);
            //return fileData; => return doesnt work. 
        }
    });
    
}) ;

module.exports = {p};