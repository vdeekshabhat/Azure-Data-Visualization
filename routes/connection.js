var mysql = require('mysql');

var con = mysql.createConnection({
  host: "assign3cloud.azurewebsites.net",
  user: "root",
  password: "deeksha",
  database: "sampledb",
  port:"3306"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;