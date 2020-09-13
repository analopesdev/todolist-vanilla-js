const Task = require('../models/Task')
const {date} = require('../../lib/utils')

module.exports ={
  //list
  list(req, res){
     Task.all(function(tasks){
      return res.render("tasks/index", {tasks})
     })
  },
  
  // //show
  // getTask(req, res){
  //   Task.find(req.params.id, function(task){
  //     if(!task) return res.send("Task Not Found")
  //     task.created_at = date(task.created_at).format

  //     return res.render("tasks/show.njk", {task})
  //   })
  // },
  
  //post
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
  
  //edit
  editTask(req, res){
      Task.find(req.params.id, function(task){
        if(!task) res.send("Task Not Found")
        // task.created_at = date(task.created_at).format
        
        return res.render("tasks/edit", {task})
      })
    },
  
  //update
  updateTask(req, res){
    const keys = Object.keys(req.body)

    for (let key of keys) {
        if (req.body[key] == '')
            return res.send('Please, fill all fields')
    }

    Task.update(req.body, function() {
        return res.redirect("/index")
       
    })
  },
  
  //delete
  deleteTask(req, res){
    Task.delete(req.body.id, function(){
      return res.redirect('/index')

    })
  },
}
