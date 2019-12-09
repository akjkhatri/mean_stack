const http = require('http');

const port = 8090;

http.createServer((req,res) =>{
    console.log(req.headers);
    console.log(req.method);
    console.log(req.url);

if(req.method === 'POST'){
    let buff = '';

    req.on('data', (chunk) => {
        buff += chunk;
    });

    req.on('end', () => {
        console.log(`Body : ${req.buff}`);
        response.end('\nAccepted body\n\n')
    });

}else {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('Hello World\n')
  };
}).listen(port);

console.log(`Server is running on port ${port}`);