const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

// middleware functions
// parse incoming string or array data
//takes incoming POST data and turns it into a key/value pair
app.use(express.urlencoded({ extended: true }))
//parse incoming JSON data
app.use(express.json())

app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

//uses public folder
app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})