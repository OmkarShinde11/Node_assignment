const express=require('express');
const insuranceRouter=express.Router();
const { getInsurance, uploadPhoto, createInsurance, updateInsurance, deleteInsurance, getsingleInsurance, reorderInsurance } = require('../controller/insuranceController');
const { protect, restrictTo } = require('../controller/authController');

insuranceRouter.route('/').get(getInsurance);
insuranceRouter.route('/createInsurance').post(protect,restrictTo('admin'),uploadPhoto,createInsurance);
insuranceRouter.route('/reorderInsurance').patch(protect,restrictTo('admin'),reorderInsurance);
insuranceRouter.route('/:id').get(getsingleInsurance).patch(protect,restrictTo('admin'),uploadPhoto,updateInsurance).delete(protect,restrictTo('admin'),deleteInsurance);

module.exports=insuranceRouter;
