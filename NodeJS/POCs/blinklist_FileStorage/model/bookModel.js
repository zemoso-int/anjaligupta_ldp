const fs = require('fs');
const path = require('path');
const readFileData = require('../service/bookService');
const filePath = path.join(path.dirname(require.main.filename),'data','bookData.json');

class Book {

    constructor(i,t,a,c,s) {
        this.id = i;
        this.title = t;
        this.author = a;
        this.category = c;
        this.status = s;
    }

    static fetchAll(cb) {
        readFileData.p.then((arr) => {
            cb(arr);
        });
    }

    static searchByAuthor(a, cb) {
        readFileData.p.then((arr) => {
            var result = arr.filter( x => x.author == a);
            cb(result);
        });
    }

    static searchByCategory(c, cb) {
        readFileData.p.then((arr) => {
            var result = arr.filter( x => x.category == c);
            cb(result);
        });
    }

    static searchByStatus(s,cb) {
        readFileData.p.then((arr) => {
            var result = arr.filter( x => x.status == s);
            cb(result);
        });
    }

    static searchByAuthorCategory(a,c, cb) {
        readFileData.p.then((arr) => {
            var result = arr.filter( x => x.category == c && x.author == a);
            cb(result);
        });
    }
    
    save() {
        readFileData.p.then((data) => {
            data.push(this);
            fs.writeFile(filePath,JSON.stringify(data), (err) => {
                    if(err)
                        console.error("Error occured during writing:- ",err);
                });
        });
    }
}

module.exports = Book;

//module.exports = {Book};  gives error. Find out why