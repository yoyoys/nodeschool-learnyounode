const fs = require('fs'),
  path = require('path')

const folder = process.argv[2],
ext = `.${process.argv[3]}`

fs.readdir(folder, (err, files)=>{
  if (err) console.log(err)
  files.forEach((value)=>{
    if(ext===path.extname(value))
      console.log(value)
  })
})