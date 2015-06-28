var fs = require('fs');
var path = require('path');

module.exports = function(dirpath, extn, callback) {
    fs.readdir(dirpath, function(err, files) {
        if (err)
            return callback(err);
        files = files.filter(function(i) {
            return (path.extname(i) === '.' + extn);
        });
        callback(null, files);
    });
};