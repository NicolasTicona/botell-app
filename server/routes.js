const express = require('express')
const router = express.Router()

const Usuario = require('./models/User.model')

router.get('/users', (req, res) => {

    Usuario.find({})
        .exec((err, users) => {

            if(err){
                return res.status(400).json({
                    ok: false,
                    err
                })
            }

            return res.json({
                ok: true,
                users
            })
        })
    
})

router.post('/login', (req, res) => {

    
    let data = req.body

    Usuario.findOne({email: data.email}, (err, userDB) => {
        if(userDB) {
            res.json({
                message: 'Esta cuenta ya existe'
            })
        }
        else{
            let user = new Usuario()
            user.name = data.name
            user.email = data.email
            user.password = data.password
            user.rank = 0
        
            user.save((err, userDB) => {
                if(err) {
                    return res.status(500).json({
                        ok: false,
                        err
                    })
                }
        
                return res.json({
                    ok: true,
                    user: userDB
                })
            })
        
        }
        
    })
    
})

router.put('/rank', (req,res) => {

    let data = req.body

    Usuario.findByIdAndUpdate(data.id, {rank: data.rank}, {new: true}, (err, userDB) => {

        if(err) {
            return res.json({
                ok: false,
                err
            })
        }

        return res.json({
            ok: true,
            user: userDB,
            data
        })
    })        

})


module.exports = router