const express=require('express');
const bodyParser = require('body-parser');
const User=require('./models/user')
var cors = require('cors')


const sequelize=require('./util/db')
const app=express();
app.use(cors())
// app.use('/',(req,res,next)=>{
//     res.json({name:"zubair"})
// })
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));


app.post('/post',(req,res)=>{
    const name=req.body.name;
    const email=req.body.email

    User.create({
        name,
        email

    })
    res.json({name:req.body.name,email:req.body.email})

})

app.get('/',(req,res)=>{
    User.findAll().then(result=>{
        res.json(result)

    })
    .catch(error=>{
        console.log(error)
    })



})
app.put('/post/:Id',(req,res)=>{
    const id=req.params.Id
    const name=req.body.name
    const email=req.body.email

    User.findByPk(id).then(user=>{
        user.name=name
        user.email=email

        return user.save()

    })
    .then(resu=>{
        res.json({msg:"updated"})
    })
    .catch(error=>{
        console.log(error)
    })
})

app.post('/post/delete/:Id',(req,res)=>{
    User.findByPk(req.params.Id).then(user=>{
        return user.destroy()
    })
    .then(result=>{
        res.json({msg:"user deleted"})

    })
    .catch(err=>{
        console.log(err)
    })
})

sequelize.sync().then(result=>{
    console.log('data base connected');
    
    app.listen(3000);
})
