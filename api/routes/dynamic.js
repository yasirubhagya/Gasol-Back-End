const express = require('express');
const dynamicRouter =  express.Router();
const dynamicController = require('../controllers/dynamicController');

dynamicRouter.get('/cash/get_all',dynamicController.cash_getAll);
dynamicRouter.get('/cheque/get_all',dynamicController.cheque_getAll);
dynamicRouter.get('/hourlyEmployee/get_all',dynamicController.hourlyEmployee_getAll);
dynamicRouter.get('/salariedEmployee/get_all',dynamicController.salariedEmployee_getAll);
dynamicRouter.get('/meterReadings/get_all',dynamicController.meterReadings_getAll);
dynamicRouter.get('/records/get_all',dynamicController.records_getAll);
dynamicRouter.get('/creditCards/get_all',dynamicController.creditCards_getAll);
dynamicRouter.get('/debt/get_all',dynamicController.debt_getAll);
dynamicRouter.get('/otherExpenditures/get_all',dynamicController.otherExpenditures_getAll);

dynamicRouter.post('/cash/insert',dynamicController.cashEdit);
dynamicRouter.post('/cheque/insert',dynamicController.chequeEdit);
dynamicRouter.post('/hourlyEmployee/insert',dynamicController.hourlyEmployeeEdit);
dynamicRouter.post('/salariedEmployee/insert',dynamicController.salariedEmployeeEdit);
dynamicRouter.post('/meterReadings/insert',dynamicController.meterReadingsEdit);
dynamicRouter.post('/records/insert',dynamicController.recordsEdit);
dynamicRouter.post('/creditCards/insert',dynamicController.creditCardsEdit);
dynamicRouter.post('/debt/insert',dynamicController.debtEdit);
dynamicRouter.post('/otherExpenditures/insert',dynamicController.otherExpendituresEdit);

dynamicRouter.post('/cash/update',dynamicController.cashUpdate);
dynamicRouter.post('/cheque/update',dynamicController.chequeUpdate);
dynamicRouter.post('/hourlyEmployee/update',dynamicController.hourlyEmployeeUpdate);
dynamicRouter.post('/salariedEmployee/update',dynamicController.salariedEmployeeUpdate);
dynamicRouter.post('/meterReadings/update',dynamicController.meterReadingsUpdate);
dynamicRouter.post('/records/update',dynamicController.recordsUpdate);
dynamicRouter.post('/creditCards/update',dynamicController.creditCardsUpdate);
dynamicRouter.post('/debt/update',dynamicController.debtUpdate);
dynamicRouter.post('/otherExpenditures/update',dynamicController.otherExpendituresUpdate);

dynamicRouter.delete('/cash/delete',dynamicController.cashDelete);
dynamicRouter.delete('/cheque/delete',dynamicController.chequeDelete);
dynamicRouter.delete('/hourlyEmployee/delete',dynamicController.hourlyEmployeeDelete);
dynamicRouter.delete('/salariedEmployee/delete',dynamicController.salariedEmployeeDelete);
dynamicRouter.delete('/meterReadings/delete',dynamicController.meterReadingsDelete);
dynamicRouter.delete('/records/delete',dynamicController.recordsDelete);
dynamicRouter.delete('/creditCards/delete',dynamicController.creditCardsDelete);
dynamicRouter.delete('/debt/delete',dynamicController.debtDelete);
dynamicRouter.delete('/otherExpenditures/delete',dynamicController.otherExpendituresDelete);

module.exports = dynamicRouter;