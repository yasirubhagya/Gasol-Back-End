const connection = require('../../sqlconnection');

///////////////////get data///////////////////////////////////////
exports.cash_getAll = (req, res, next) => {
    connection.query('SELECT * FROM CASH',(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });     
}

exports.cheque_getAll = (req, res, next) => {
    connection.query('SELECT * FROM CHEQUE',(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });     
}
exports.hourlyEmployee_getAll = (req, res, next) => {
    connection.query('SELECT * FROM HOURLY_EMPLOYEE',(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });     
}
exports.salariedEmployee_getAll = (req, res, next) => {
    connection.query('SELECT * FROM SALARIED_EMPLOYEE',(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });     
}
exports.meterReadings_getAll = (req, res, next) => {
    connection.query('SELECT * FROM METER_READINGS',(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });     
}
exports.records_getAll = (req, res, next) => {
    connection.query('SELECT * FROM RECORDS',(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });     
}
exports.creditCards_getAll = (req, res, next) => {
    connection.query('SELECT * FROM CREADIT_CARD',(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });     
}
exports.debt_getAll = (req, res, next) => {
    connection.query('SELECT * FROM DEBT',(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });     
}
exports.otherExpenditures_getAll = (req, res, next) => {
    connection.query('SELECT * FROM OTHER_EXPENDITURES',(error,result,fields)=>{
       if(error){
            return res.status(503).json(error);
       }  
       res.status(200).json(result);
    });     
}

///////////insert data////////////////////////////////////
exports.cashEdit= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.chequeEdit= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.hourlyEmployeeEdit= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.salariedEmployeeEdit= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.meterReadingsEdit= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.recordsEdit= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.creditCardsEdit= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.otherExpendituresEdit= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.debtEdit= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}

///////update data///////////////////////////////////////////////
exports.cashUpdate= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.chequeUpdate= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.hourlyEmployeeUpdate= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.salariedEmployeeUpdate= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.meterReadingsUpdate= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.recordsUpdate= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.creditCardsUpdate= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.otherExpendituresUpdate= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.debtUpdate= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}

////////delete/////////////////////////////////////////////////
exports.cashDelete= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('DELETE FROM CASH WHERE ',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.chequeDelete= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.hourlyEmployeeDelete= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.salariedEmployeeDelete= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.meterReadingsDelete= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.recordsDelete= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.creditCardsDelete= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.otherExpendituresDelete= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.debtDelete= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}