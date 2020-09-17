const {date} = require('../../lib/utils');
const db = require('../../config/db');

module.exports = {
  all(callback){
    db.query(
      `SELECT * 
        FROM tasks 
          ORDER BY title, 
            description DESC;`, function(err, results){
      if(err)  res.send("Database Error!")

      callback(results.rows)
    })
  },
  
  create(data, callback){
    const query = `
    INSERT INTO tasks (
      title,
      description,
      created_at
    ) VALUES ($1, $2, $3)
    RETURNING id
  `
  const values = [
    data.title,
    data.description,
    date(Date.now()).format,
  ]

  db.query(query, values, function(err, results){
    if(err) throw "Database Error!"
    callback(results.rows[0])
    })
  },

  find(id, callback){
    db.query(`
      SELECT *
        FROM tasks
           WHERE id = $1`, [id], function (err, results) {
             if (err) throw `Database error! ${err}`
              callback(results.rows[0])
        })
  },

  update(data, callback){
    const query = `
      UPDATE tasks SET
      title=($1),
      description=($2)
      WHERE id=($3)
                `
    const values = [
      data.title,
      data.description,
      data.id
    ]

    db.query(query, values, function(err, results){
      if(err) throw `Database Error! ${err}`
        callback()
    });
  },

  delete(id, callback){
    db.query(`DELETE FROM tasks WHERE id= $1`, [id], function(err, results){
      if(err) throw `Database Error! ${err}`
      callback()
    })
  }

}