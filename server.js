const http = require('http');
const port =process.env.PORT || 3000;
const app = require('./app');
var mysql = require('mysql');


  
  var mysql      = require('mysql');
  var connection = mysql.createConnection({
    host     : '50.116.93.216',
    user     : 'prasad',
    password : 'Prasad123',
    database : 'mtpmkxzs_gasol'
  });
   
  connection.connect();
   
  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
   
  connection.end();

//const server =http.createServer(app);
//server.listen(port);