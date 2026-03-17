const Order = require('../models/order');
const orders = [];
const createOrder = (req, res) => {
    const newOrder = new Order(req.body.id, req.body.customerId, req.body.products);
    orders.push(newOrder);
    res.json(newOrder);
};
module.exports = { createOrder };