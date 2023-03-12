var http = require('http');
http.createServer(function (req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<body bgcolor = 'cyan'>");
    res.write('Hello World!');
    res.write("</body>");
    res.end("<h1> good morning </h1>");
    console.log("connecting");
}).listen(8080);