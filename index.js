const express = require('express')
const app = express()
const port = process.env.port || 3000

const cors = require("cors")
app.use(cors())

app.get('/', (req, res) => 
{
    res.send('Olá, mundo!')
})

app.listen(port, () => 
{
    console.log(`Servidor funcionando na porta: ${port}`)
})