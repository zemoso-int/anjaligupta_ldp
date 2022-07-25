const { raw } = require('express');
const fs = require('fs');
const path = require('path');
const rootPath = require('../util/root_path');

const filePath = path.join(rootPath,'data','products.json');
let products =[];

class Product {

    constructor(t) {
        this.title = t;
    }

    save() {
        var arr;
        console.log("saving: "+ this.title);
        fs.readFile(filePath, (err,rawdata) => {
            if(err) {
                console.log("error occured while reading "+err);
            }

            products = JSON.parse(rawdata); 
            products.push(this);
           // console.log("the array is ", ...products);
            fs.writeFile(filePath,JSON.stringify(products), err=> {
                if(err) {
                    console.log("error occured while writing "+err);
                }
            });
        });
        
    }

    static fetchAll(){
        let rawData = fs.readFileSync(filePath); //buffer data
        /*
        fs.readFile(filePath, (err,rawFileData) => {
            if(err) {
                console.log("An error occurred in fetchAll:- ",err);
            } else {
                var fileData = JSON.parse(rawFileData);
                console.log("sending the file data ",fileData);
                return fileData;
            }
        });
        */
        return JSON.parse(rawData);


    }
}

module.exports = Product;