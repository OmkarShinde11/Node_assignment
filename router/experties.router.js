const express=require('express');
const expertiesRouter=express.Router();
const { getExperties,uploadPhoto, createExperties, getSingleExperties, updateExperties, deleteExperties, reorderExperties, } = require('../controller/expertiesController');
const { protect, restrictTo } = require('../controller/authController');


expertiesRouter.route('/').get(getExperties);
expertiesRouter.route('/createExperties').post(protect,restrictTo('admin'),uploadPhoto,createExperties);
expertiesRouter.route('/reorderExperties').patch(protect,restrictTo('admin'),reorderExperties);
expertiesRouter.route('/:id').get(getSingleExperties).patch(protect,restrictTo('admin'),uploadPhoto,updateExperties).delete(protect,restrictTo('admin'),deleteExperties);

module.exports=expertiesRouter;