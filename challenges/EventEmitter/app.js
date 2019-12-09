var http = require('http')

var server = http.createServer(function (request, response) {

    request.on('data', function (chunk) { console.log(chunk.toString()); });

    request.on('end', function () {
        response.write('Request Completed!');
        response.end();
    });

});

console.log("Starting up the server");
server.listen(8000);