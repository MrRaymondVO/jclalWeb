var http = require('http'), fs=require("fs");
var host = ('127.0.0.1');
var port = ('33333');


var server = http.createServer(function (call, respond) {
    fs.readFile("../index.html", function (err, html) {
        respond.writeHeader(200, { "Content-Type": "text/html" })
        respond.write(html);
        respond.end();
    })  
})

server.listen(port, host, function () {
    console.log('Server ON --> ' + host + ':' + port);
})