var strftime = require('strftime');
var net = require('net');

var server = net.createServer(function(socket) {
    var t = strftime('%F %H:%M', new Date());
    socket.end(t + '\n');
});

server.listen(process.argv[2]);