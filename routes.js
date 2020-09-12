const express = require('express')
const routes = express.Router()

routes.get('/', function (req, res){
    return res.render("todolist/index")
})

module.exports = routes