const express = require('express')
const routes = express.Router()

routes.get('/', function (req, res){
    return res.render('todolist/index')
})

routes.post('/index', function (req, res){
    return res.send(req.body)
})

module.exports = routes