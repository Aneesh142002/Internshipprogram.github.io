//const res = require('express/lib/response');
var url=require('url');
var http= require('http');
var dt = require('./mymodule');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type':'text/html'});
    var q = url.parse(req.url, true).query;
    var a=q.a;
    var b=q.b;
    a = parseInt(a);
    b = parseInt(b);
    res.write("the addition is" +dt.add(a,b)+'<br/>');
    res.write("the substraction is" +dt.sub(a,b)+'<br/>');
    res.write("the multiplication is" +dt.mul(a,b)+'<br/>');
    res.write("the divison is" +dt.div(a,b)+'<br/>');
    res.write("<body bgcolor='lavender'>");
    //res.write('hello world!');
    res.write("</body>");
    res.end("<h1>good morning</h1>");
    console.log("connecting");
}).listen(8081);