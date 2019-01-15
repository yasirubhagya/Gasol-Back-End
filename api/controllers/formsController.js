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
      
     connection.query('INSERT INTO EMPLOYEE VALUES(?, ?,?, ?,?, ?,?, ?)',[val.NIC,val.FName,val.LName,val.DOB,val.PhoneNumber,val.Gender,val.Address,val.LevelId],(error,result,fields)=>{
        if(error){
             return res.status(503).json(error);
        }  
        res.status(200).json(result);
     });    
 }

 exports.customerEdit = (req, res, next) => {
     var val=req.body;
    connection.query('INSERT INTO DEBT_CUSTOMER VALUES(?,?,?,?,?)',[val.CustomerID ,val.CompanyName,val.Threshold,val.phoneNUmber,val.Address],(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });    
}

exports.vehicleEdit = (req, res, next) => {
     var val=req.body;
    connection.query('INSERT INTO VEHICLE VALUES(?,?,?,?,?)',[val.VehicleID,val.CompanyID,val.VehicleNumber,val.FuelTypes,val.FuelID],(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });    
}


exports.fuelTypeEdit = (req, res, next) => {
     var val=req.body;
    connection.query('INSERT INTO FUELL_TYPE VALUES(?,?,?,?)',[val.FuelID,val.TankID,val.Name,val.Commision],(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });    
}

exports.tankEdit= (req, res, next) => {
     var val=req.body;
    connection.query('INSERT INTO TANK VALUES(?,?,?,?,?)',[val.TankID,val.Admin_Id,val.Capacitor,val.Resovoir,val.Label],(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });    
}

exports.pumpEdit= (req, res, next) => {
     var val=req.body;
    connection.query('INSERT INTO PUMP VALUES(?,?,?)',[val.Pump,val.TankId,val.Label],(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });    
}

/////update data/////////////////////////////////////////////////////
exports.employeeUpdate= (req, res, next) => {
     var val=req.body;
    connection.query('CALL updateEmployee(?, ?,?, ?,?, ?,?, ?)',[val.NIC,val.FName,val.LName,val.DOB,val.PhoneNumber,val.Gender,val.Address,val.LevelId],(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });    
}

exports.customerUpdate = (req, res, next) => {
    var val=req.body;
   connection.query('CALL  updateDebtCustomer(?,?,?,?,?)',[val.CustomerID ,val.CompanyName,val.Threshold,val.phoneNUmber,val.Address],(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}

exports.vehicleUpdate = (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('CALL updateVehicle(?,?,?,?,?)',[val.VehicleID,val.CompanyID,val.VehicleNumber,val.FuelTypes,val.FuelID],(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}


exports.fuelTypeUpdate = (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('CALL updateFuelType(?,?,?,?)',[val.FuelID,val.TankID,val.Name,val.Commision],(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}

exports.tankUpdate= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('CALL updateTank(?,?,?,?,?)',[val.TankID,val.Admin_Id,val.Capacitor,val.Resovoir,val.Label],(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}

exports.pumpUpdate= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('CALL updatePump(?,?,?)',[val.Pump,val.TankId,val.Label],(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}

/////delete//////////////////////////////////////////////////////////
exports.employeeDelete = (req, res, next) => {
     var nic=req.params.NIC;
    connection.query('DELETE FROM EMPLOYEE WHERE NIC=?',[nic],(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });    
}

exports.customerDelete = (req, res, next) => {
    var cid=req.params.CustomerID;
   connection.query('DELETE FROM DEBT_CUSTOMER WHERE CustomerID=?',[cid],(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}

exports.vehicleDelete = (req, res, next) => {
    var vid=req.params.NIC;
   connection.query('DELETE FROM VEHICLE WHERE VehicleID=?',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}


exports.fuelTypeDelete = (req, res, next) => {
    var fid=req.params.NIC;
   connection.query('DELETE FROM FUEL_TYPE WHERE FuelID=?',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}

exports.tankDelete= (req, res, next) => {
    var tid=req.params.NIC;
   connection.query('DELETE FROM TANK WHERE TankID=?',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}

exports.pumpDelete= (req, res, next) => {
    var pid=req.params.NIC;
   connection.query('DELETE FROM PUMP WHERE PumpID=?',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
