const express=require('express');
const coreUspRouter=express.Router();
const { getUspCores, createCoreUsp, getSingleCoreUsp, updateCoreUsp, deleteCoreUsp,uploadPhoto, reorderCoreUsp } = require('../controller/coreUspController');
const { protect, restrictTo } = require('../controller/authController');


coreUspRouter.route('/').get(getUspCores);
coreUspRouter.route('/createCoreUsp').post(protect,restrictTo('admin'),uploadPhoto,createCoreUsp);
coreUspRouter.route('/reorderCoreUsp').patch(protect,restrictTo('admin'),reorderCoreUsp);
coreUspRouter.route('/:id').get(getSingleCoreUsp).patch(protect,restrictTo('admin'),uploadPhoto,updateCoreUsp).delete(protect,restrictTo('admin'),deleteCoreUsp);

module.exports=coreUspRouter;