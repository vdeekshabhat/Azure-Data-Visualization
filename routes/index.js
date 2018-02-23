var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  response = {
    'name': 'Deeksha',
    'age': 24
  };
  console.log('response = %o', response);
  res.render('index', { name: response.name, age: response.age });
});

module.exports = router;
