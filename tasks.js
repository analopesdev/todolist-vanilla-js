const fs = require('fs');
const data = require("./data.json")

//Show
exports.getTask = function(req, res){
 const {id}  = req.params

 const foundTask = data.tasks.find(function(task){
   return task.id == id
 })

 if(!foundTask) return res.send("Task not found")

 const task = {
   ...foundTask,
   created_at: new Intl.DateTimeFormat("pt-BR").format(foundTask.created_at),
 }

 return res.render("tasks/show.njk", {task})

}


//post
exports.createTask = function(req, res){
  const keys = Object.keys(req.body)

  for(key of keys){
      if(req.body[key] == ""){
        return res.send('Please, fill all fields')
      }
  }

  let {title, description} = req.body

  const created_at = Date.now()
  const id = Number(data.tasks.length + 1)
  
  
  data.tasks.push({
    id,
    created_at,
    title,
    description
  })

  //verificar
  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if(err) return res.send("Write file error!")
    return res.render("tasks/index.njk")
  })

  //  return res.send(req.body)
}

//edit

exports.editTask = function (req, res){
  const {id}  = req.params

 const foundTask = data.tasks.find(function(task){
   return task.id == id
 })

 if(!foundTask) return res.send("Task not found")
  
  return res.render('tasks/edit', {task: foundTask})
}


//update

//delete