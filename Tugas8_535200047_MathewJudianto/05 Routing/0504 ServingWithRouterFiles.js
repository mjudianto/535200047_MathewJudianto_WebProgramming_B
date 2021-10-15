const port = 3000,
    http = require("http"),
    httpStatus = require("htttp-status-code"),
    router = require("./router"),
    fs = require("fs"),
    plainTextContentType = {
        "Content-Type" : "text/plain"
    },
    htmlContentType = {
        "Content-Type" : "text/html"
    },
    customReadFile = (file,res) => {
        fs.readFile(`./${file}`, (errors, data) => {
            if (error) {
                console.log("Error reading file...");
            }
            res.end(data);
        });
    };

router.get("/", (rew,res) => {
    res.writeHead(httpStatusCodes.OK, plainTextContentType);
    res.end("INDEX");
});

router.get("/index.html", (rew,res) => {
    res.writeHead(httpStatusCodes.OK, htmlContentType);
    customReadFile("views/index.html", res);
});

router.post("/", (res,res) => {
    res.writeHead(httpStatusCodes.OK, plainTextContentType);
    res.end("POSTED");
});

http.createServer(router.handle).listen(3000);

console.log(`The server is listening on port number : ${port}`);