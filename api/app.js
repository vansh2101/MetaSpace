const express = require('express')
const cors = require('cors')

//routes
const auth = require('./routes/auth')
const user = require('./routes/user')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())


app.use('/auth', auth)

// app.use('/transfer', transfer)

app.get('/', (req, res) => {
    res.send(req.cookies);
})


app.listen(8000, () => {
    console.log('Server is running on port 8000')
})