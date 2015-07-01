var http = require('http');
var map = require('through2-map');

http.createServer(function(req, res) {
    if (req.method == 'POST') {
        req.pipe(map(function(chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(res);
    } else {
        return res.end("Send me a POST request");
    }
}).listen(process.argv[2] || 8000);