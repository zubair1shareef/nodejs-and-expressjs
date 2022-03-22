const express=require('express');
const admin=require('./routes/admin')
const shop=require('./routes/shop')
const contact=require('./routes/contact')
const sucess=require('./routes/sucess')
const bodyParser=require('body-parser');
const path=require('path');


const rootDir=require('./util/path');

const app=express();
app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',admin);
app.use('/shop',shop);
app.use('/contact',contact);
app.use('/sucess',sucess);

app.use((req,res,next)=>{
    res.status(400).sendFile(path.join(__dirname,'views','404.html'))
   
})


app.listen(3000)