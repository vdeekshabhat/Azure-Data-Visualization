var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  a = {
    'name': 'Deeksha',
    'age': 24
  };
  res.json(a);
});

module.exports = router;
