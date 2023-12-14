// // 
// const moduloA = require("./moduloA")


// moduloA.valorModuloA()

const express = require('express')

const app = express()

app.get('/', function(req, res) {
    res.send("Hello Word by: Mateus Pantoja")
})

app.listen(3000)