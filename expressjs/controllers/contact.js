const rootDir=require('../util/path');
const path=require('path');

exports.contact=(req,res)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'))
}