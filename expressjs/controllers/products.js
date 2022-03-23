const path=require('path');
const rootDir=require('../util/path');
exports.getProducts=(req,res)=>{
    res.sendFile(path.join(rootDir,'views','add_products.html'))
}

exports.postProducts=(req,res)=>{
    console.log(req.body)
    res.redirect('/shop')
}