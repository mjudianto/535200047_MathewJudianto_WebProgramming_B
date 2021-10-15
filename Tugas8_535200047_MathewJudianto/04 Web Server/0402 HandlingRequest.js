const port = 3000,
    http = require("http"),
    httpStatus = require("http-satus-code"),
    app = http.createServer();

app.on("request", (req, res) => {
    res.writeHead(httpStatus.OK, {
        "Content-type" : "text/plain"
    });
    let responseMessage = "<h1>This will show on the screen</h1>";
    res.end(responseMessage);
})

app.listen(port);

console.log(`The server has started and is listening on port number : ? ${port}`);