const http = require('http');
const { url } = require('inspector');
const host = 'http://localhost';
const port = 3000;
const stats = require('./pcRam');


http.createServer((req, res) => {
    let url = req.url;

    if (url == '/stats'){
        res.end(JSON.stringify(stats, null, 2));
    } else {
        res.end('Seja Bem vindo!')
    }
 

}).listen(port, ()=> console.log(`Server is running in ${host}:${port}`));