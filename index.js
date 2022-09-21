const express = require('express');
const path = require('path')
require('dotenv').config()
const port = process.env.PORT || 6000

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(path.join__dirname, './index.html'))
})

app.listen(port, () => {
    console.log('Docked at port ' + port)
})