var url=require('url');
var http= require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type':'text/html'});
    var q = url.parse(req.url, true).query;
    var a=q.a;
    var b=q.b;
    a = parseInt(a);
    b = parseInt(b);
    var c=a+b;
    res.write("the answer is" +c);
    res.write("<body bgcolor='midnight blue'>");
    res.write("</body>");
    res.end("<h1>Your answer is correct</h1>");
    console.log("connecting");
}).listen(8080);