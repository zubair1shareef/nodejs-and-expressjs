const http=require('http');

http.createServer((req,res)=>{

    const url=req.url;
    res.setHeader('Content-Type', 'text/html');
    console.log(url);
    if(url=='/home'){
        
        res.write('<html>')
        res.write('<head><title>welcome home</title></head>')
        res.write('<body>')
        res.write('<h1>home page</h1>')
        res.write('</body>')
        res.write('</head>')
        res.end();

    }
    else if(url=='/about'){
        
        res.write('<html>')
        res.write('<head><title>hello world</title></head>')
        res.write('<body>')
        res.write('<h1>hello world page</h1>')
        res.write('</body>')
        res.write('</head>')
        res.end();

    }
    else if(url=='/node'){
        res.setHeader('Content-Type', 'text/html');
   res.write('<html>')
   res.write('<head><title>hello world</title></head>')
   res.write('<body>')
   res.write('<h1>node page</h1>')
   res.write('</body>')
   res.write('</head>')
   res.end();

    }

   
    


}).listen(3000)