var http = require('http');
var bl = require('bl');
var cs = require('concat-stream');

http.get(process.argv[2], function(res) {
    res.pipe(bl(function(err, data) {
        if (err)
            console.log(err);
        data = data.toString();
        console.log(data.length);
        console.log(data);

    }));
});