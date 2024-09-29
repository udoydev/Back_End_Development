// first require the fs file system
const fs = require('fs')

const readstream = fs.createReadStream(`${__dirname}/read.txt`, 'utf8')
const writestream = fs.createWriteStream(`${__dirname}/output.txt`, 'utf8')

// readstream.on('data', (chunk) =>
// {
//    writestream.write(chunk)

// })
console.log("thank you")

readstream.pipe(writestream)