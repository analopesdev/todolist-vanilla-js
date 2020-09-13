const express = require('express')
const routes = express.Router()
const tasks = require('./tasks')

routes.get('/', function (req, res){
    return res.render('tasks/index')
})

routes.get('/tasks', function (req, res){
    return res.redirect('tasks/index')
})

routes.get('/index/:id', tasks.getTask)
routes.post('/index', tasks.createTask)
routes.get('/index/:id/edit', tasks.editTask);
routes.put('/index', tasks.updateTask)
routes.delete('/index', tasks.deleteTask)

module.exports = routes;