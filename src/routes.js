const express = require('express')
const routes = express.Router()
const tasks = require('./app/controllers/tasks')

routes.get('/index', tasks.list)

routes.get('/', function (req, res){
    return res.render('tasks/index')
})

// routes.get('/tasks', function (req, res){
//     return res.redirect('tasks/index')
// })

// routes.get('/index/:id', tasks.getTask)
routes.post('/index', tasks.createTask)
routes.put('/index', tasks.updateTask)
routes.get('/index/:id/edit', tasks.editTask);
routes.delete('/index', tasks.deleteTask)

module.exports = routes;