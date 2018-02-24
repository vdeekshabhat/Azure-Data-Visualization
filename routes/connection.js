var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

var config = {
    userName: 'root',
    password: 'deeksha',
    server: 'assign3cloud.scm.azurewebsites.net',
    options: {
      database: 'sampledb',
      encrypt: true
    }
}
var connection = new Connection(config);

connection.on('connect', function(err){
    if (!err){
      console.log('connection successful');
    } else {
      console.error('connection unsuccessful %o',err);
    }
});

module.exports = connection;