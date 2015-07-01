var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    if (req.method != 'GET')
        return console.error("Send a GET request !");

    var parsedUrl = url.parse(req.url, true);
    var code = callback(parsedUrl);
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(code));
    // console.log(JSON.stringify(code));
}).listen(process.argv[2]);


function callback(parsedUrl) {
    if (parsedUrl.pathname == '/api/parsetime') {
        var d = new Date(parsedUrl.query.iso);
        return {
            hour: d.getHours(),
            minute: d.getMinutes(),
            second: d.getSeconds()
        };
    }
    if (parsedUrl.pathname == '/api/unixtime') {
        var e = new Date(parsedUrl.query.iso);
        return {
            unixtime: e.getTime()
        };
    }
}