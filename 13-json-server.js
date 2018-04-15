const http = require('http'),
  url = require('url')

const server = http.createServer((req, res)=>{
  let path = url.parse(req.url,true)
  res.writeHead(200, { 'Content-Type': 'application/json' })
  var date = new Date(path.query.iso)
  switch (path.pathname) {
    case '/api/parsetime':
      res.end(JSON.stringify({
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      }))
      break;
    case '/api/unixtime':
      res.end(JSON.stringify({
        unixtime: +date
      }))
      break;
    default:
      res.writeHead(404)
      res.end('not found')
      break;
  }
})


server.listen(process.argv[2])
