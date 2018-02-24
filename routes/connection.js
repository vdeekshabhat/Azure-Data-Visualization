var mysql = require('mysql');

var con = mysql.createConnection({
  host: "assign3cloud.scm.azurewebsites.net",
  user: "root",
  password: "deeksha",
  database: "sampledb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;