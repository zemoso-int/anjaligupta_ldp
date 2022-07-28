const path = require('path');
const userDataModel = require('../model/userDataModel');


postUpdateReadingStatus = (req,res,next) => {
                        let newStatus = req.body.status;
                        let bookId = req.body.id;
                        console.log('UpdateReadingStatus with id ',bookId);
                        userDataModel.updateReadingStatus(bookId,newStatus, (msg)=>{ 
                            res.send(msg);
                        });
                    };  //use patch!!


postAddBookToList = (req,res,next) => {
                    //add book
                    let bookId = req.body.id;
                    console.log('AddBookToList with id ',bookId);
                    userDataModel.saveBook(bookId, (msg)=>{ 
                        res.send(msg);
                    } );
                };

getSearchBook = (req,res,next) => {
                    console.log("SearchBook in user's list");
                    let author, category,readingStatus;
                    if(("author" in req.query) && ("category" in req.query)) {
                        author = req.query.author;
                        category = req.query.category;
                        userDataModel.searchByAuthorCategory(author,category, (data)=>{ 
                                            res.send(data);
                                        });
                    } else if("author" in req.query) {
                        author = req.query.author;
                        userDataModel.searchByAuthor(author, (data)=>{ 
                                            res.send(data);
                                        });
                    } else if ("category" in req.query) {
                        category = req.query.category;
                        suserDataModel.searchByCategory(category, (data)=>{ 
                                            res.send(data);
                                        });
                    } else if ("status" in req.query) {
                        readingStatus = req.query.status;
                        userDataModel.searchByReadingStatus(readingStatus, (data)=>{ 
                                            res.send(data);
                                        });
                    } else {
                        userDataModel.fetchAll((data)=>{ 
                                            res.send(data);
                                        });
                    }
            };

module.exports = {postUpdateReadingStatus, postAddBookToList, getSearchBook};


//check where we define the input type -json/text etc