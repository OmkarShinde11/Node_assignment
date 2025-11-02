const express=require('express');
const expertiesRouter=express.Router();
const { getExperties,uploadPhoto, createExperties, getSingleExperties, updateExperties, deleteExperties, reorderExperties, } = require('../controller/expertiesController');
const { protect } = require('../controller/authController');


expertiesRouter.route('/').get(getExperties);
expertiesRouter.route('/createExperties').post(protect,uploadPhoto,createExperties);
expertiesRouter.route('/reorderExperties').patch(protect,reorderExperties);
expertiesRouter.route('/:id').get(getSingleExperties).patch(protect,uploadPhoto,updateExperties).delete(protect,deleteExperties);

module.exports=expertiesRouter;