const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('나 맞아 익스프레')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})