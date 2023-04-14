const express = require('express')
const app = express()
const port = process.env.port || 3000

app.get('/', (req, res) => 
{
    res.send('Olá, mundoo!')
})

app.listen(port, () => 
{
    console.log(`Example app listening on ort ${port}`)
})