const Task = require('../models/Task')
const {date} = require('../../lib/utils')

module.exports ={
  listTasks(req, res){
     Task.all(function(tasks){
      return res.render("tasks/index", {tasks})
     })
  },

  createTask(req, res){
    const keys = Object.keys(req.body)
  
    for(key of keys){
      if(req.body[key] == ""){
        return res.send('Please, fill all fields')
      }
    }
    
    Task.create(req.body, function(){
      return res.redirect("/index")
    })
  },
  
  getTask(req, res){
      Task.find(req.params.id, function(task){
        if(!task) res.send("Task Not Found")
        task.created_at = date(task.created_at).format
        
        return res.render("tasks/edit", {task})
      })
  },
  
  editTask(req, res){
    const keys = Object.keys(req.body)

    for (let key of keys) {
        if (req.body[key] == '')
            return res.send('Please, fill all fields')
    }

    Task.update(req.body, function() {
        return res.redirect("/index")
    })
  },
  
  deleteTask(req, res){
    Task.delete(req.body.id, function(){
      return res.redirect('/index')
    })
  },
}
