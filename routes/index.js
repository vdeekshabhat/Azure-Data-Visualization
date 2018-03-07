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
  var query = "LOAD DATA INFILE '/var/lib/mysql-files/earthq.csv' INTO TABLE earthquake FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\"' LINES TERMINATED BY '\r\n' IGNORE 1 LINES (time,latitude,longitude,@mag,net,place) SET mag = nullif(@mag,'');";
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

router.post('/education', function(req, res, next) {
  var startunit = req.body.startunit;
  var endunit = req.body.endunit;
  var q = "select avg(SAT_AVG) as avg,State from Education where unitid between "+startunit+" and "+endunit+" group by State limit 10";
  start = new Date().getTime();
  console.log('start = '+start);

  connection.query(q, function(err, rows, fields) {
    end = new Date().getTime();
    console.log('end = '+end);

    diff = (end-start)/1000 + 'sec';
    if (!err){
      console.log('%o',rows);
      res.json(rows);
      //res.send('success. The time taken for execution is: '+diff);
    }
    else{
      console.log('error %o',err);
      res.send('error '+diff);
    }
  });

  console.log('am here - '+q);
});

// router.post('/earthquake', function(req, res, next) {
//   var longitude = req.body.longitude;
//   var latitude = req.body.latitude;
//   var mag = req.body.mag;
//   var net = req.body.net;
//   var place = req.body.place;
//   var query = "Select * from earthquake where ";
//   var count=0;
//   if(longitude){
//     query=query+" longitude="+longitude;
//     count++;

//   }
//   if(latitude){
//     if(count>0)
//     query=query+" and latitude="+latitude;
//     else
//     query=query+" latitude="+latitude;
//   count++;

//   }
//   if(mag){
//     if(count>0)
//     query=query+" and mag="+mag;
//     else
//     query=query+" mag="+mag; 
//   count++; 
  
//   }
  
//   if(net){
//     if(count>0)
//     query=query+" and net='"+net+"'";
//     else
//     query=query+" net='"+net+"'"; 
//   count++; 
//   }

//   if(place){
//     if(count>0)
//     query=query+" and place='"+place+"'";
//     else
//     query=query+" place='"+place+"';"; 
//   count++; 
//   }
//   start = new Date().getTime();

//   connection.query(query, function(err, rows, fields) {
//     end = new Date().getTime();
//     diff = (end-start)/1000 + 'sec';
//     if (!err){
//       res.render('index.pug',{rows: rows});
//     }
//     else{
//       console.log('error %o',err);
//       res.send('error '+diff);
//     }
//   });

// });

module.exports = router;