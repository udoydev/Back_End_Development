const fs = require("fs");
let data="hello this is Md Imran Nazir Udoy > I am Learning Data Science !!!"

fs.writeFile('message.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
}); 
  
fs.readFile('./message.txt','utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 