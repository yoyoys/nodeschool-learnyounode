const fs = require('fs'),
  path = require('path')

module.exports = (folder, ext, callback)=>{
  fs.readdir(folder, (err, files)=>{
    if (err)
      return callback(err)

    files = files.filter(value => `.${ext}` === path.extname(value))
    return callback(null, files)
  })
}