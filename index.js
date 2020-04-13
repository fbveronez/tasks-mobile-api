const express = require('express')
const app = express()
const db  = require('./config/db')
const consign = require('consign')

consign()
.then('./config/middlewares.js')
.then('./api')
.then('./config/routes.js')
.into(app)

app.db = db
app.get('/', (req,res) =>{
    res.status(200).send('<h1>Olá mundo!</h1>')
})


app.listen('3000', () =>{
    console.log("Backend Conectado")
})