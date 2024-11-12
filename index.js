const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'})
    res.end("Hello World")
}).listen(3050)

console.log("server rodando na porta 'http://localhost:3050'")