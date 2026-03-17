const express = require('express');
const app = express();
const port = 3000;
const productController = require('./controllers/productController');
const orderController = require('./controllers/orderController');
app.use(express.json());
app.get('/products', productController.getProducts);
app.post('/orders', orderController.createOrder);
app.listen(port, () => console.log(`Server listening on port ${port}`));