//create similar server using Express framework

const express = require('express')
const app = express()
const port = 3000


app.get('/', (request, response) => {

  response.send('Hello From Express!');

})

app.listen(port, (err) => {

  if(err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)

})
