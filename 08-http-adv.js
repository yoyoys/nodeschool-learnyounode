const http = require('http'),
  bl = require('bl'),
  concatStream = require('concat-Stream')

http.get(process.argv[2],
  res => {
    res.setEncoding('utf8')
    res.pipe(bl((err,data) => {
      if(err)
        return console.error(err)
      console.log(data.length)
      console.log(data.toString())
    }))
  })