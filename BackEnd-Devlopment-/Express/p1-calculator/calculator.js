const express = require('express')
const bodyParser = require('body-parser')


const app = express();

const port = 3000

//get request
app.get('/', (req, res) =>
{
   res.sendFile(__dirname + "/get.html")
})

//bmi get
app.get('/bmi.html', (req, res) =>
    {
       res.sendFile(__dirname + "/bmi.html")
    })

//encoding the html file by bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
//post req
app.post("/", (req, res) =>
{
    //now do the calculation
   let n1 = Number(req.body.num1)
   let n2 = Number(req.body.num2)
    let result = n1 + n2;
    
    res.send(`The ans is : ${result}`);
    
})

app.post("/bmi.html", (req, res) => {
    // Get the values from the request body and convert them to floats
    let h = parseFloat(req.body.h);
    let w = parseFloat(req.body.w);
    
    // Calculate the BMI
    let result = (w / Math.pow(h, 2)).toFixed(2);
    
    // Send the result back to the client
    res.send(`The BMI is: ${result}`);
});


//listening the port
app.listen(port, () =>
{
    console.log(`liseting on port no ${port}`)
})