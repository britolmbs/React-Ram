const http = require('http');
const { url } = require('inspector');
const host = 'http://localhost';
const port = 3000;
const stats = './pcRam.js';

http.createServer((req, res) => 
let url = req.url;
if(url ==)
res.end('<h1>Working</h1>')).listen(port, () => console.log(`server is running in ${host}:${port}`));