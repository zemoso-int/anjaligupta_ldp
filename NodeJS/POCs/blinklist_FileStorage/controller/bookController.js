const path = require('path');
const bookModel = require('../model/bookModel');

postCreateBook = (req,res,next) => {
                let id = req.body.id;
                let t = req.body.title;
                let a = req.body.author;
                let c = req.body.category;
                let book = new bookModel(id,t,a,c,null);
                book.save();
                let value = "Added Book "+ req.body.title;
                res.status(200).send(value);
            };
        

getSearchBook = (req,res,next) => {
                let author, category;
                
                if(("author" in req.query) && ("category" in req.query)) {
                    author = req.query.author;
                    category = req.query.category;
                    bookModel.searchByAuthorCategory(author,category, (data)=>{ 
                                                res.send(data);
                                            });
                } else if("author" in req.query) {
                    author = req.query.author;
                    bookModel.searchByAuthor(author, (data)=>{ 
                                                res.send(data);
                                            });
                } else if ("category" in req.query) {
                    category = req.query.category;
                    bookModel.searchByCategory(category, (data)=>{ 
                                                res.send(data);
                                            });
                } else {
                    bookModel.fetchAll((data)=>{ 
                                                res.send(data);
                                            });
                }
            };

module.exports = {postCreateBook, getSearchBook};