const express=require('express');
const bodyParser = require('body-parser');
const User=require('./models/user')
var cors = require('cors')


const sequelize=require('./util/db')
const userRoutes=require('./routes/user')
const app=express();
app.use(cors())
// app.use('/',(req,res,next)=>{
//     res.json({name:"zubair"})
// })
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());

app.use(userRoutes)


sequelize.sync().then(result=>{
    console.log('data base connected');
    
    app.listen(3000);
})
