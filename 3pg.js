var fs = require('fs');
var file = process.argv[2];
data = fs.readFileSync(file);
var dataStr = data.toString();
var line = dataStr.split('\n');
console.log(line.length-1);