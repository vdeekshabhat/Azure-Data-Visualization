var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

var config = {
    userName: 'deekshabhat',
    password: 'Chinku#1',
    server: 'photoalbum-6331.database.windows.net',
    options: {
      database: 'Photo_Album',
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