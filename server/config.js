// PORT

process.env.PORT = process.env.PORT || 3000

// Heroku NODE_ENV MONGO_URI

// ENV
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

// DB
// ========================

let urlDB

if( process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/botell-app'
}else{
    urlDB = process.env.MONGO_URI
}

process.env.urlDB = urlDB
