var fs = require('fs')
var path = process.argv[2]

fs.readFile(path, 'utf8', (err, data)=>{
  if (err)
    return console.log(err)
  console.log(data.match(/\n/g).length)
})