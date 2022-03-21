const express=require('express');
const router=express.Router()

router.get('/add-product',(req,res)=>{
    res.send("<form method='POST'  action='/admin/product'> <input type='text' name='title' > <input type='Number' name='size' > </input> <button type='submit'>submit</button></form>")
})

router.post('/product',(req,res)=>{
    console.log(req.body)
    res.redirect('/shop')
})

module.exports=router