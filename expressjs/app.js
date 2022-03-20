const express=require('express');
const app=express();

app.use((req,res,next)=>{
    console.log("fns;kfn")
    next();
})
app.use((req,res,next)=>{
    res.send("<h1> hola world</h1>")
})

app.listen(3000)