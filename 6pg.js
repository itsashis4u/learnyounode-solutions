var fs = require('fs');
var path = require('path');

var file = module.exports = {
    one: function(dirpath, extn, callback) {
        fs.readdir(dirpath, function(err, files) {
            if (err)
                callback(err);
            files.filter(function(i) {
                return (path.extname(files[i]) === '.' + extn);
            });
        });

    }
};