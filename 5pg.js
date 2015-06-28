var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function(err, files) {
    // console.log(files);
    // if(path.extname(files) == "."+ext){
    // console.log(path.extname(files));
    //  }
    for (var i in files)
        if (path.extname(files[i]) == '.' + ext) {
            console.log(files[i]);
        }
});