const mongoose = require('mongoose')

let Schema = mongoose.Schema

let userSchema = new Schema({

    name: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        required: [true, 'El email es necesario']
    },
    password: {
        type: String,
        required: [true, 'El password es necesario']
    },
    rank: {
        type: Number
    }

})

module.exports = mongoose.model('Usuario', userSchema)