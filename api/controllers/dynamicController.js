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
    var VAL=req.body;
   connection.query('INSERT INTO CASH VALUES(?,?)',[val.ItemID,val.Amount],(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.chequeEdit= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('INSERT INTO CHEQUE VALUES(?,?,?,?,?,?,?)',[val.ItemID,val.ChequeID,val.NameOFInstitue,val.Amount,val.ReceivedDate,val.ExpireDate,val.Incoming_Outgoing],(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.hourlyEmployeeEdit= (req, res, next) => {
    var val=req.body;
   connection.query('INSERT INTO HOURLY_EMPLOYEE VALUES(?,?,?,?)',[val.EmployeeId,val. PayScale,val.WorkingHours_Day,val.WorkingHours_Night],(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.salariedEmployeeEdit= (req, res, next) => {
   var val=req.body;
   connection.query('INSERT INTO  SALARIED_EMPLOYEE VALUES(?,?,?)',[val.EmployeeId,val.Salary,val.workingDays],(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.meterReadingsEdit= (req, res, next) => {
   var val=req.body;
   connection.query('INSERT INTO  METER_READINGS VALUES(?,?,?)',[val.PumpID,val.RecordValue,val.ReadingDate],(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.recordsEdit= (req, res, next) => {
   var val=req.body;
   connection.query('INSERT INTO RECORDS VALUES(?,?,?,?)',[val.RecordID,val.Date_Time,val.Admin_Id,val.Added_By],(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.creditCardsEdit= (req, res, next) => {
   var val=req.body;
   connection.query('INSERT INTO CREADIT_CARD VALUES(?,?,?,?,?)',[val.ID,val.CustomerID,val.Datep,val.Types,val.Amount],(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.otherExpendituresEdit= (req, res, next) => {
   var val=req.body;
   connection.query('INSERT INTO RECORDS VALUES(?,?,?,?)',[val.ID,val.Name,val.Types,val.Price],(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.debtEdit= (req, res, next) => {
   var val=req.body;
   connection.query('INSERT INTO DEBT VALUES(?,?)',[val.CustomerID,val.Amount],(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}

///////update data///////////////////////////////////////////////
exports.cashUpdate= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('CALL ',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.chequeUpdate= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('CALL updateCheque(?,?,?,?,?,?,?)',[val.ItemID,val.ChequeID,val.NameOFInstitue,val.Amount,val.ReceivedDate,val.ExpireDate,val.Incoming_Outgoing],(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.hourlyEmployeeUpdate= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('CALL updateHEmployee(?,?,?,?)',[val.EmployeeId,val. PayScale,val.WorkingHours_Day,val.WorkingHours_Night],(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.salariedEmployeeUpdate= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('CALL salaryEmployeeUpdate(?,?,?)',[val.EmployeeId,val.Salary,val.workingDays],(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.meterReadingsUpdate= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('CALL updateMeterReadings(?,?,?)',[val.PumpID,val.RecordValue,val.ReadingDate],(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.recordsUpdate= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('CALL updateRecords(?,?,?,?)',[val.RecordID,val.Date_Time,val.Admin_Id,val.Added_By],(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.creditCardsUpdate= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('CALL updateCREADIT_CARD(?,?,?,?,?)',[val.ID,val.CustomerID,val.Datep,val.Types,val.Amount],(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.otherExpendituresUpdate= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('CALL updateOtherExpenditure(?,?,?,?)',[val.ID,val.Name,val.Types,val.Price],(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.debtUpdate= (req, res, next) => {
    var nic=req.body.NIC;
   connection.query('CALL updateDebt(?,?)',[val.CustomerID,val.Amount],(error,result,fields)=>{
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
    var cid=req.body.NIC;
   connection.query('DELETE FROM CHEQUE WHERE ChequeID=cid',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.hourlyEmployeeDelete= (req, res, next) => {
    var eid=req.body.NIC;
   connection.query('DELETE FROM HOURLY_EMPLOYEE WHERE EmployeeId=eid',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.salariedEmployeeDelete= (req, res, next) => {
    var eid=req.body.NIC;
   connection.query('DELETE FROM SALARIED_EMPLOYEE WHERE EmployeeId=eid',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.meterReadingsDelete= (req, res, next) => {
    var pid=req.body.NIC;
   connection.query('DELETE FROM METER_READINGS WHERE PumpID=pid',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.recordsDelete= (req, res, next) => {
    var rid=req.body.NIC;
   connection.query('DELETE FROM RECORDS WHERE RecordID=rid',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.creditCardsDelete= (req, res, next) => {
    var id=req.body.NIC;
   connection.query('DELETE FROM CREADIT_CARD WHERE  ID=id',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.otherExpendituresDelete= (req, res, next) => {
    var id=req.body.NIC;
   connection.query('DELETE FROM OTHER_EXPENDITURES WHERE ID = id',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}
exports.debtDelete= (req, res, next) => {
    var cid=req.body.NIC;
   connection.query('DELETE FROM DEBT WHERE CustomerID=cid',(error,result,fields)=>{
      if(error){
           return res.status(503).json(error);
      }  
      res.status(200).json(result);
   });    
}