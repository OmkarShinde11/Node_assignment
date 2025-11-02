const express=require('express');
const insuranceRouter=express.Router();
const { getInsurance, uploadPhoto, createInsurance, updateInsurance, deleteInsurance, getsingleInsurance, reorderInsurance } = require('../controller/insuranceController');
const { protect } = require('../controller/authController');

insuranceRouter.route('/').get(getInsurance);
insuranceRouter.route('/createInsurance').post(protect,uploadPhoto,createInsurance);
insuranceRouter.route('/reorderInsurance').patch(protect,reorderInsurance);
insuranceRouter.route('/:id').get(getsingleInsurance).patch(protect,uploadPhoto,updateInsurance).delete(protect,deleteInsurance);

module.exports=insuranceRouter;
