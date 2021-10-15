const port = 3000,

    http = require("http"),

    httpStatus = require("http-satus-code"),

    app = http.createServer((request, response => {
        console.log("Received an incoming request!");

        response.writeHead(httpStatus.OK, { "Content-type" : "text/plain"});

        let responseMessage = "<h1>Hello, Universe</h1>";

        response.write(responseMessage);

        response.readableEnded();

        console.log(`Send a response : ${responseMessage}`);
    }));

app.listen(port);

console.log(`The server has started and is listening to port number : ${port}`);