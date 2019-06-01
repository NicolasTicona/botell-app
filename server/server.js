const express = require('express')
const app = express()
const server = require('http').Server(app)

const mongoose = require('mongoose')

app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Routes
app.use(require('./routes.js'))

mongoose.connect('mongodb://localhost:27017/botell-app', {useNewUrlParser: true}, (err, res) => {

    if(err) throw err;

    console.log('Database Online');
})


server.listen(3000, () => {
    console.log('Server running ...')
})