var fs = require('fs')
var path = process.argv[2]

var file = fs.readFileSync(path, 'utf8')

console.log(file.match(/\n/g).length)