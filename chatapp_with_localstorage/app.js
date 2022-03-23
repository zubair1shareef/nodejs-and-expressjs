const express=require('express');
const login=require('./routes/login')
const fs=require('fs')

const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:false}))

app.use(login)


app.get('/',(req, res, next)=>{
    var data
      fs.readFile('log.txt', 'utf-8', (err, d) => {
        if(err) {
            throw err;
        }
        data=d;
        console.log(d)
        res.send(`<form  method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')"  >  <input type="text" name="message" id="message"></input><input type="hidden" name="username" id="username">   </input> <button type="submit"> submit</button> </form> <pre>${data}</pre>`)
    });
  
})



app.post('/',(req, res)=>{
    var logger = fs.createWriteStream('log.txt', {
        flags: 'a' 
      })
      
      logger.write(`${req.body.username}:${req.body.message} \n`) 
      res.redirect("/")
 
})




app.listen(3000);
