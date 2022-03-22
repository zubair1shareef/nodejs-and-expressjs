const express=require('express');
const router=express.Router()
const rootDir=require('../util/path');
const path=require('path');

router.get('/add-product',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','add_products.html'))
})

router.post('/product',(req,res)=>{
    console.log(req.body)
    res.redirect('/shop')
})

module.exports=router