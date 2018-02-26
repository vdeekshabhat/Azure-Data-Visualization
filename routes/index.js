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
  res.render('index', { name: response.name, age: response.age, rows: [] });
});

router.get('/loaddata', function(req, res, next) {
  var query = "LOAD DATA INFILE '/var/lib/mysql-files/Starbucks.csv' INTO TABLE Starbucks FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\"' LINES TERMINATED BY '\r\n' IGNORE 1 LINES (id,StarbucksId,Name,StoreNumber,PhoneNumber,Street1,Street2,Street3,city,CountrySubdivisionCode,CountryCode,PostalCode,@Longitude,@Latitude,Timezone)SET Longitude = nullif(@Longitude,' '),Latitude = nullif(@Latitude,' ');";
  start = new Date().getTime();

  connection.query(query, function(err, rows, fields) {
    end = new Date().getTime();
    diff = (end-start)/1000 + 'sec';
    if (!err){
      res.send('success. The time taken for execution is: '+diff);
    }
    else{
      console.log('error %o',err);
      res.send('error '+diff);
    }
  });
});

router.post('/ziprange', function(req, res, next) {
  var zipstart = req.body.zipstart;
  var zipend = req.body.zipend;

  var query = "Select * from USZipcodes where zip between "+zipstart+" and "+zipend+";";

  start = new Date().getTime();

  connection.query(query, function(err, rows, fields) {
    end = new Date().getTime();
    diff = (end-start)/1000 + 'sec';
    if (!err){
      res.render('index.pug',{rows: rows});
    }
    else{
      console.log('error %o',err);
      res.send('error '+diff);
    }
  });

});

module.exports = router;