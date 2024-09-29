var http = require('http');

//create a server object:
const server=http.createServer(function (req, res) {
    if (req.url === '/')
    {
        res.write('Hello World!'); //write a response to the client
        res.end(); //end the response
    }
    else if (req.url === '/about')
    {
        res.write('Welcome to the about page '); //write a response to the client
        res.end(); //end the response
    }
    else if (req.url === '/explore')
    {
        res.write('Welcome to the explore page'); //write a response to the client
        res.end(); //end the response
    }
    else 
        {
            res.write('not fount 404'); //write a response to the client
            res.end(); //end the response
        }
})//the server object listens on port 8080
server.listen(8080); 

console.log("listening on port 8080")
