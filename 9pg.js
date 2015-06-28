var http = require('http');
var bl = require('bl');
var result = [];
var count = 0;

function httpGet(a) {
    http.get(process.argv[2 + a], function(res) {
        res.pipe(bl(function(err, data) {
            if (err) return console.error(err);
            result[a] = data.toString();
            count++;

            if (count == 3)
                disRes();
        }));
    });
}

for (var i = 0; i < 3; i++)
    httpGet(i);

function disRes() {
    for (var i = 0; i < 3; i++) {
        console.log(result[i]);
    }
}