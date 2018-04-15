const myModule = require('./06-module')


const folder = process.argv[2],
ext = process.argv[3]

myModule(folder,ext,(err,data)=>{
  if(err)
    console.log(err)
  data.forEach(value=> console.log(value))
})