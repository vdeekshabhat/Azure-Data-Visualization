var express = require('express');
var router = express.Router();
var connection = require('./db.js')

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
  // Create a query to insert row
  var query = "INSERT INTO USZipcodes(username, title, modified, ratings, filelink, ratingscount) VALUES('"+username+"','"+title+"','"+modified+"','"+ratings+"','"+filelink+"','"+ratingscount+"')";
  var request = new Request(query, function(err,rowcount,rows){
    if (err){
      console.log('error %o',err);
    }
    console.log('success');
  });
  connection.execSql(request);
});
module.exports = router;
