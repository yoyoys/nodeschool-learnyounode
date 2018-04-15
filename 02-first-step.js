let result = 0

for(let [index, item] of process.argv.entries())
{
  if (index < 2)
    continue;
  result+=+item
}
console.log(result)