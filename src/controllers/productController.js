const Product = require('../models/product');
const products = [];
const getProducts = (req, res) => {
    res.json(products);
};
const createProduct = (req, res) => {
    const newProduct = new Product(req.body.id, req.body.name, req.body.price);
    products.push(newProduct);
    res.json(newProduct);
};
module.exports = { getProducts, createProduct };