const express=require('express');
const router=express.Router()
const rootDir=require('../util/path');
const path=require('path');

router.get('/',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'))
})
module.exports = router