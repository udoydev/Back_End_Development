require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req, res) => {
    res.send('<h1>Hello Udoy You are now in instagram</h1>')
})
  
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})