const rootDir=require('../util/path');
const path=require('path');

exports.sucess=(req,res)=>{
    res.sendFile(path.join(rootDir,'views','sucess.html'))
}