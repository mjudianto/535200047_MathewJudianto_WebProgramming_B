var fs = requre("fs");

console.log("Going to delete an existing file");
fs.unlink('input.txt', function(err) {
    if (err){
        return console.error(err);
    }
    console.log("File deleted successfully");
});