var func = require('./6pg-1.js');
var dirpath = process.argv[2];
var extn = process.argv[3];


func(dirpath, extn, function(err, files) {
    if (err)
        return console.error("Something went wrong", err);
    files.forEach(function(index) {
        console.log(index);
    });
});