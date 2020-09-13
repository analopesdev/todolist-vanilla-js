const {Pool} = require("pg")

module.exports = new Pool({
  user: 'postgres',
  password: "00000",
  host: "localhost",
  port: 5433,
  database: "todolist"
})