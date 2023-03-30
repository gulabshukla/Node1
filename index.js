const http = require('http');
const port = 3001;

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser.");
        res.end();
    }else if(req.url==='/home'){
        console.log("inside /home");
        res.write("ON home");
        res.end();
    }
});

server.listen(port);