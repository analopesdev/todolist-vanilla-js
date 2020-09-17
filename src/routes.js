const express = require('express')
const routes = express.Router()
const tasks = require('./app/controllers/TasksController')

routes.get('/', function (req, res){
    return res.render('tasks/index')
})

routes.get('/index', tasks.listTasks)
routes.get('/index/:id/edit', tasks.getTask);
routes.post('/index', tasks.createTask)
routes.put('/index', tasks.editTask)
routes.delete('/index', tasks.deleteTask)

module.exports = routes;