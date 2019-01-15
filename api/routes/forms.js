
const express = require('express');
const formsRouter = express.Router();
const formsController = require('../controllers/formsController');

formsRouter.get('/employee/get_all',formsController.employee_getAll);
formsRouter.get('/customer/get_all',formsController.customer_getAll);
formsRouter.get('/vehicle/get_all',formsController.vehicle_getAll);
formsRouter.get('/fuel_type/get_all',formsController.fuelType_getAll);
formsRouter.get('/tank/get_all',formsController.tank_getAll);
formsRouter.get('/pump/get_all',formsController.pump_getAll);

formsRouter.post('/employee/insert',formsController.employeeEdit);
formsRouter.get('/customer/insert',formsController.customerEdit);
formsRouter.get('/vehicle/insert',formsController.vehicleEdit);
formsRouter.get('/fuel_type/insert',formsController.fuelTypeEdit);
formsRouter.get('/tank/insert',formsController.tankEdit);
formsRouter.get('/pump/insert',formsController.pumpEdit);

formsRouter.post('/employee/update',formsController.employeeUpdate);
formsRouter.post('/customer/update',formsController.customerUpdate);
formsRouter.post('/vehicle/update',formsController.vehicleUpdate);
formsRouter.post('/fuel_type/update',formsController.fuelTypeUpdate);
formsRouter.post('/tank/update',formsController.tankUpdate);
formsRouter.post('/pump/update',formsController.pumpUpdate);

formsRouter.delete('/employee/delete',formsController.employeeDelete);
formsRouter.delete('/customer/delete',formsController.customerDelete);
formsRouter.delete('/vehicle/delete',formsController.vehicleDelete);
formsRouter.delete('/fuel_type/delete',formsController.fuelTypeDelete);
formsRouter.delete('/tank/delete',formsController.tankDelete);
formsRouter.delete('/pump/delete',formsController.pumpDelete);



module.exports = formsRouter;