const express = require('express')
const routes = express.Router()
const tasks = require('./tasks')

routes.get('/', function (req, res){
    return res.render('tasks/index.njk')
})

routes.get('/index/:id', tasks.getTask)
routes.post('/index', tasks.createTask)

module.exports = routes;