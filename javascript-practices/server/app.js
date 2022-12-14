const http = require('http');

const server = http.createServer(function(req, resp){
    resp.writeHead(200,{
        'Content-Type': 'text/html'
    });

    resp.end('<h1>Hello World</h1>')
});

server.listen(8888, function(){
    console.log("server starts...")
});