const express = require('express');
const path = require('path')
require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())

app.use('/', express.static(path.join(__dirname, '../client/index.html')))

app.use(express.static(path.join(__dirname, '../client')))

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/index.html'))
// })

// app.get('/js', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/main.js'))
// })

app.post('register', (req, res) => res.status(200).send('Registered'))

app.listen(port, () => {
    console.log('Docked at port ' + port)
})