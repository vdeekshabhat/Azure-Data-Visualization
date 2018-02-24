var express = require('express');
var router = express.Router();
var connection = require('./connection.js');
var Request = require('tedious').Request;


/* GET home page. */
router.get('/', function(req, res, next) {
  response = {
    'name': 'Deeksha',
    'age': 24
  };
  console.log('response = %o', response);
  res.render('index', { name: response.name, age: response.age });
});

router.get('/loaddata', function(req, res, next) {
  var query = "LOAD DATA INFILE '/var/lib/mysql-files/USZipcodes.csv' INTO TABLE USZipcodes FIELDS TERMINATED BY ',' (zip,state,county,city);";
  var request = new Request(query, function(err,rowcount,rows){
    end = new Date().getTime();
    diff = end-start;
    if (err){
      console.log('error %o',err);
      res.send('error '+diff);
    }
    res.send('success'+diff);
  });
  start = new Date().getTime();
  connection.execSql(request);
});
module.exports = router;
