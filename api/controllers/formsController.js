const connection = require('../../sqlconnection');

//get data////////////////////////////////////////////////////////////////////////
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

 //insert data/////////////////////////////////////////////////////////////////
 exports.employeeEdit = (req, res, next) => {
      var val=req.body;
      
     connection.query('INSERT INTO EMPLOYEE VALUES(?, ?,?, ?,?, ?,?, ?)',[val.nic,val.firstname,val.lastname,val.dateofbirth,val.phoneno,val.gender,val.address,val.levelid],(error,result,fields)=>{
        if(error){
             return res.status(503).json(error);
        }  
        res.status(200).json(result);
     });    
 }

 exports.customerEdit = (req, res, next) => {
     var nic=req.body.NIC;
    connection.query('INSERT INTO DEBT_CUSTOMER VALUES()',(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });    
}

exports.vehicleEdit = (req, res, next) => {
     var nic=req.body.NIC;
    connection.query('INSERT INTO VEHICLE VALUES()',(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });    
}


exports.fuelTypeEdit = (req, res, next) => {
     var nic=req.body.NIC;
    connection.query('INSERT INTO FUELL_TYPE VALUES()',(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });    
}

exports.tankEdit= (req, res, next) => {
     var nic=req.body.NIC;
    connection.query('INSERT INTO TANK VALUES()',(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });    
}

exports.pumpEdit= (req, res, next) => {
     var nic=req.body.NIC;
    connection.query('INSERT INTO PUMP VALUES()',(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });    
}

/////update data/////////////////////////////////////////////////////
exports.employeeUpdate= (req, res, next) => {
     var nic=req.body.NIC;
    connection.query('CALL updateEmployee()',(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });    
}

exports.customerUpdate = (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('CALL  updateDebtCustomer()',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}

exports.vehicleUpdate = (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('CALL updateVehicle()',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}


exports.fuelTypeUpdate = (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('CALL updateFuelType()',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}

exports.tankUpdate= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('CALL updateTank()',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}

exports.pumpUpdate= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('CALL updatePump()',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}

/////delete//////////////////////////////////////////////////////////
exports.employeeDelete = (req, res, next) => {
     var nic=req.body.NIC;
    connection.query('DELETE FROM EMPLOYEE WHERE NIC=nic',(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });    
}

exports.customerDelete = (req, res, next) => {
    var cid=req.body.NIC;
   connection.query('DELETE FROM DEBT_CUSTOMER WHERE CustomerID=cid',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}

exports.vehicleDelete = (req, res, next) => {
    var vid=req.body.NIC;
   connection.query('DELETE FROM VEHICLE WHERE VehicleID=vid',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}


exports.fuelTypeDelete = (req, res, next) => {
    var fid=req.body.NIC;
   connection.query('DELETE FROM FUEL_TYPE WHERE FuelID=fid',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}

exports.tankDelete= (req, res, next) => {
    var tid=req.body.NIC;
   connection.query('DELETE FROM TANK WHERE TankID=tid',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}

exports.pumpDelete= (req, res, next) => {
    var pid=req.body.NIC;
   connection.query('DELETE FROM PUMP WHERE PumpID=pid',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
