const rootDir=require('../util/path');
const path=require('path');
const addproducts=require('../views/add_products')
exports.contact=(req,res)=>{
   // res.sendFile(path.join(rootDir,'views','contact.html'))
    res.sendFile('../views/add_products')
}