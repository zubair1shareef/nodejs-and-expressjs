const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const productRoutes=require('../controllers/products');



// /admin/add-product => GET
router.get('/add-product', productRoutes.getAddProduct);

// /admin/add-product => POST
router.post('/add-product',productRoutes.postAddProduct);

module.exports = router;

