// file system module 
const file = require('fs')

file.writeFileSync('myfile.txt', 'helloProgrammers')
const d=file.readFileSync('myfile.txt')
console.log(d.toString())