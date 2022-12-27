const express = require('express')
const bodyParser = require('body-parser')
const models = require('./models/index')
const app = express()

models.sequelizeInstance.sync({force: true, alter: true}).then( async() => {
    console.log('Synced db')
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("API Running")
})

app.listen(process.env.PORT || 5000, ()=> {
    console.log('Server running at port 5000')
})