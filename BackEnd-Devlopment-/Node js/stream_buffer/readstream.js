// first require the fs file system
const fs = require('fs')

const readstream = fs.createReadStream(`${__dirname}/read.txt`, 'utf8')
readstream.on('data', (chunk) =>
{
    console.log(chunk)

})
console.log("thank you")

