const express=require('express');
const insuranceRouter=express.Router();
const { getInsurance, uploadPhoto, createInsurance, updateInsurance, deleteInsurance, getsingleInsurance } = require('../controller/insuranceController');

insuranceRouter.route('/').get(getInsurance);
insuranceRouter.route('/createInsurance').post(uploadPhoto,createInsurance);
insuranceRouter.route('/:id').get(getsingleInsurance).patch(uploadPhoto,updateInsurance).delete(deleteInsurance);

module.exports=insuranceRouter;
