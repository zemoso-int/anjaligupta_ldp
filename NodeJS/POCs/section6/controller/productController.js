const path = require('path');
const rootPath = require('../util/root_path');
const productModel = require('../model/productModel');

getAddProduct = (req,res,next) => {
                    console.log('in getAddProduct controller');
                    res.sendFile(path.join(rootPath,'views','add-product.html'));
                };

postAddProduct = (req,res,next)=> {
                    console.log("postAddProduct " ,req.body);
                    //products.push({title: req.body.title});
                    let prod = new productModel(req.body.title);
                    prod.save();
                    let value = "Added Product "+ req.body.title;
                    res.status(200).send(value);
                };

getAllProducts = (req,res,next) => {
                    console.log("getAllProducts");
                    res.send(productModel.fetchAll());
                    //res.sendFile(path.join(rootPath,'views','shop.html'));
                };

module.exports = {getAddProduct,postAddProduct,getAllProducts};