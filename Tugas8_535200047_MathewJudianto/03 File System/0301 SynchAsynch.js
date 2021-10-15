var fs = require("fs");

// Asynchronus read
fs.readFile('input.txt', function(err, data) {
    if (err){
        return console.log(err);
    }
    console.log("Asynchronus read : " + data.toString());
});

// Synchronus read
var data = fs.readFileSync('input.txt');
console.log("Synchronus read : " + data.toString());

console.log("Progress Ended.");