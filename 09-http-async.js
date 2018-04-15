const http = require('http'),
  concatStream = require('concat-Stream')

const [,,...urls] = process.argv

const results = []

function pringResults(){
  if (results[0] && results[1] && results[2])
    results.forEach(o => console.log(o))
}

function httpGet(value, index){
  http.get(value, res=>{
    res.pipe(concatStream(data => results[index] = data.toString()))
    res.on('end', pringResults)
  })
}

urls.forEach(httpGet)