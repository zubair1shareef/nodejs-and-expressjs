const express=require('express');
const admin=require('./routes/admin')
const shop=require('./routes/shop')
const bodyParser=require('body-parser');


const app=express();
app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',admin);
app.use('/shop',shop);

app.use((req,res,next)=>{
    res.status(400).send('<h1>PAGE NOT FOUND</h1>')
    next()
})


app.listen(3000)