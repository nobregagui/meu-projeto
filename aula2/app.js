const http = require('http')
const express = require('express')
const app = express()

http.createServer((req, res) => {
   res.writeHead(200, {"Content-type":"text/plain"})
        switch (req.url) {
            case "/":
                res.end("Você está na página home")
                break;
            case "/contato":
                res.end("Você está na página contato")
            default:
                res.end('Sem resultados')
                break;
        }

   res.end("Meu primeiro servidor")
}).listen(3000)
