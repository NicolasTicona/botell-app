const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {

    let data = req.body

    return new Promise((resolve, reject) => {

        resolve(data)

    })

})

router.get('user', (req, res) => {

    let user = req.body

    return new Promise((resolve, reject) => {

        resolve(data)
    })
})

router.post('login')

module.exports = router