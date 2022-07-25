const fs = require('fs');
const path = require('path');
const filePath = path.join(path.dirname(require.main.filename),'data','userData.json');
const readUserData = require('../service/userDataService');
const readBookData = require('../service/bookService');
const bookList = [];

class UserData {

    static saveBook(bookid, cb) {
        var msg;
        readUserData.p.then((data) => {
            //check if id already exist or not if dne, fetch data from book.json and add the copy here
            const exists = data.some(x => x.id == bookid);
            if(!exists)  {
                readBookData.p.then(bookArray => {
                                    var bookData = bookArray.filter( x => x.id == bookid);
                                    if(bookData.length > 0) {
                                        bookData[0].status = 'New';
                                        data.push(bookData[0]);
                                        fs.writeFile(filePath,JSON.stringify(data), (err) => {
                                            if(err) {
                                                msg = 'Error occured during writing';
                                                console.error(msg,": ",err);
                                                cb(msg);     
                                                }
                                            else {
                                                msg = 'Book added!';
                                                console.log(msg);
                                                cb(msg);     
                                            }    
                                        });
                                    } else {
                                        msg = 'Book doesnt exist in the catalog';
                                        cb(msg);     
                                    }
                                });
            } else {
                msg = 'Book already in the list';
                console.log(msg);
                cb(msg);     
            } 
           // cb(msg); doesnt work for book added and book dne. check why     
        });
    }

    static updateReadingStatus(bookId,newStatus,cb) {
        readUserData.p.then((arr) => {
            let i=0,msg;
            while(i<arr.length) {
                if(arr[i].id == bookId) {
                    arr[i].status = newStatus;
                }
                i++;
            }
            fs.writeFile(filePath,JSON.stringify(arr), (err) => {
                if(err !=null) {
                    msg = 'Error occured during updating status';
                    console.error(msg,": ",err);
                    cb(msg);     
                    }
                else {
                    msg = 'Status of book changed';
                    console.log(msg);
                    cb(msg);     
                }    
            });
        });
    }

    static searchByReadingStatus(s,cb) {
        readUserData.p.then((arr) => {
            var result = arr.filter( x => x.status == s);
            cb(result);
        });
    }

    static searchByAuthor(a, cb) {
        readUserData.p.then((arr) => {
            var result = arr.filter( x => x.author == a);
            cb(result);
        });
    }

    static searchByCategory(c, cb) {
        readUserData.p.then((arr) => {
            var result = arr.filter( x => x.category == c);
            cb(result);
        });
    }

    static searchByAuthorCategory(a,c, cb) {
        readUserData.p.then((arr) => {
            var result = arr.filter( x => x.category == c && x.author == a);
            cb(result);
        });
    }

    static fetchAll(cb) {
        readUserData.p.then((arr) => {
            cb(arr);
        });
    }
}

module.exports = UserData;