const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const sb = require('@supabase/supabase-js');
require('dotenv').config()

//supabase
const config = require('../supabase/config')

const supabase = sb.createClient(config.url, config.key)


//middlewares
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())


//routes
router.get('/', (req, res) => {
    res.send('Auth related functions')
})


router.post('/login', (req, res) => {
    supabase.auth.signIn({
        email: req.body.email,
        password: process.env.PASSWORD
    })
        .then(data => {
            res.json(data);
        })
})


router.post('/register', (req, res) => {
    supabase.auth.signUp({
        email: req.body.email,
        password: process.env.PASSWORD
    }, {
        data: {
            admin: req.body.admin
        }
    })
        .then(data => {
            res.json(data);
        })
})


module.exports = router