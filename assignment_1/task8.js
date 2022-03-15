const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
    url=req.url;
    res.setHeader('Content-Type', 'text/html');
    if(url=='/'){
        res.write('<html>')
        res.write('<head><title> home</title></head>')
        res.write('<body>')
        res.write('<form action="/message" method="POST" type="text"><input type="text" name="message" ></input><button type="submit">submit</button></form>')
        res.write('</body>')
        res.write('</head>')
        res.end();


    }
    if(url=='/message' && req.method=='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk)
        })
        req.on('end',()=>{
            const parseBody=Buffer.concat(body).toString();
            const message=parseBody.split('=')[1];
            fs.writeFileSync('message.txt',message)
            res.statusCode=302
            res.setHeader('Location','/');
          
            return res.end();

        })

    }

}).listen(3000)