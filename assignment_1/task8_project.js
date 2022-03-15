const http=require('http');
const fs=require('fs');
const { fstat } = require('fs');

http.createServer((req,res)=>{
    
    url=req.url;
    var data;
    try{
       data= fs.readFileSync('message.txt','utf8')

    }
    catch(err){
        console.error(err)
    }
    console.log(data)
    
    res.setHeader('Content-Type', 'text/html');
    if(url=='/'){
        res.write('<html>')
        res.write('<head><title> home</title></head>')
        res.write('<body>')
        res.write(`<h1>${data}</h1>`)
        res.write('<form action="/message" method="POST" type="text"><input type="text" name="message" ></input><button type="submit">submit</button></form>')
        res.write('</body>')
        res.write('</head>')
        res.end();


    }
    else if(url=='/message' && req.method=='POST'){

        body=[];
        req.on('data',(c)=>{
            body.push(c);

        })
        req.on('end',()=>{
            const parseData=Buffer.concat(body).toString();
            var message=parseData.split('=')[1];
            message= message.replace('+', ' ');
            fs.writeFileSync('message.txt',message)
            res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();
        })

    }
}).listen(3000)