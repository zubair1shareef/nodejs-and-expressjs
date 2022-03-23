const express=require('express');
const router=express.Router()


const productsController=require('../controllers/products')

router.get('/add-product',productsController.getProducts)

router.post('/product',productsController.postProducts)

module.exports=router