const express=require('express');
const expertiesRouter=express.Router();
const { getExperties,uploadPhoto, createExperties, getSingleExperties, updateExperties, deleteExperties, } = require('../controller/expertiesController');


expertiesRouter.route('/').get(getExperties);
expertiesRouter.route('/createExperties').post(uploadPhoto,createExperties);
expertiesRouter.route('/:id').get(getSingleExperties).patch(uploadPhoto,updateExperties).delete(deleteExperties);

module.exports=expertiesRouter;