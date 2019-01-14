const connection = require('../../sqlconnection');

exports.employee_getAll = (req, res, next) => {
    connection.query('SELECT * FROM EMPLOYEE',(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });     
}