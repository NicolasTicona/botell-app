require('./config')

const express = require('express')
const app = express()
const server = require('http').Server(app)

const mongoose = require('mongoose')

app.use(express.static('public-old'))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Routes
app.use(require('./routes.js'))

mongoose.connect(process.env.urlDB, {useNewUrlParser: true}, (err, res) => {

    if(err) throw err;

    console.log('Database Online');
})


server.listen(process.env.PORT, () => {
    console.log('Server running ...')
})