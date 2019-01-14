const connection = require('../../sqlconnection');

//get data
exports.employee_getAll = (req, res, next) => {
    connection.query('SELECT * FROM EMPLOYEE',(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });     
}

exports.customer_getAll = (req, res, next) => {
     connection.query('SELECT * FROM DEBT_CUSTOMER',(error,result,fields)=>{
        if(error){
             return res.status(503).json(error);
        }  
        res.status(200).json(result);
     }); 
 }

 exports.vehicle_getAll = (req, res, next) => {
     connection.query('select * from VEHICLE',(error,result,fields)=>{
        if(error){
             return res.status(503).json(error);
        }  
        res.status(200).json(result);
     });    
 }

 exports.fuelType_getAll = (req, res, next) => {
     connection.query('select * from FUEL_TYPE',(error,result,fields)=>{
        if(error){
             return res.status(503).json(error);
        }  
        res.status(200).json(result);
     });    
 }

 exports.tank_getAll = (req, res, next) => {
     connection.query('select * from TANK',(error,result,fields)=>{
        if(error){
             return res.status(503).json(error);
        }  
        res.status(200).json(result);
     });    
 }

 exports.pump_getAll = (req, res, next) => {
     connection.query('select * from PUMP',(error,result,fields)=>{
        if(error){
             return res.status(503).json(error);
        }  
        res.status(200).json(result);
     });    
 }

 //insert data
 exports.employeeEdit = (req, res, next) => {
      var nic=req.body.NIC;
     connection.query('',(error,result,fields)=>{
        if(error){
             return res.status(503).json(error);
        }  
        res.status(200).json(result);
     });    
 }

 exports.customerEdit = (req, res, next) => {
     var nic=req.body.NIC;
    connection.query('',(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });    
}

exports.vehicleEdit = (req, res, next) => {
     var nic=req.body.NIC;
    connection.query('',(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });    
}


exports.fuelTypeEdit = (req, res, next) => {
     var nic=req.body.NIC;
    connection.query('',(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });    
}

exports.tankEdit= (req, res, next) => {
     var nic=req.body.NIC;
    connection.query('',(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });    
}

exports.pumpEdit= (req, res, next) => {
     var nic=req.body.NIC;
    connection.query('',(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });    
}
