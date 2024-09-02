/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';

import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
      {
          message: "What is your URL",
          name:"URL",
          
       },
       
      
  ])
    .then((answers) => {
        const url = answers.URL
        
        
        var qr_png = qr.image(url, { type: 'png' });
        qr_png.pipe(fs.createWriteStream('qr_png.png'));
        fs.writeFile('qr.txt', url, 'utf8', (err) =>
        {
            if (err) throw err;
            console.log("this file has been saved");
        }); 

        
        
        
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
     
    }
  });