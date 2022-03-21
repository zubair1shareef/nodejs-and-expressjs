const express=require('express');
const login=require('./routes/login')
const fs=require('fs')

const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:false}))

app.use(login)


app.get('/',(req, res, next)=>{

    res.send('<form action="/" method="POST" onsubmit="document.getElementById(`username`).value=localStorage.getItem(`username`)" >  <input type="text" name="message" id="message"></input><input type="hidden" name="username" id="username">   </input> <button type="submit"> submit</button> </form>')

})

app.get('/',(req,res)=>{
    fs.readFile('log.txt', 'utf-8', (err, data) => {
        if(err) {
            throw err;
        }
        console.log(data);
    });
})

app.post('/',(req, res)=>{
    var logger = fs.createWriteStream('log.txt', {
        flags: 'a' 
      })
      
      logger.write(`${req.body.username}:${req.body.message} \n`) 
     
 
})




app.listen(3000);
