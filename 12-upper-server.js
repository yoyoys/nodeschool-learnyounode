const http = require('http'),
  map = require('through2-map')

const server = http.createServer((req, res)=>{
  if (req.method === 'POST') {
    req.pipe(
      map(data => data.toString().toUpperCase())
    ).pipe(res)
  }
})


server.listen(process.argv[2])
