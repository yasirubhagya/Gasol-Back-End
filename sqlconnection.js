const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : '50.116.93.216',
  user     : 'mtpmkxzs',
  password : 'Rashmi123',
  database : 'mtpmkxzs_gasol'
});
 
module.exports = connection;
 
/* connection.query('SELECT * FROM CASH', function (error, results, fields) {
  if (error) throw error;
  console.log( results,fields);
}); */

//connection.end();
 