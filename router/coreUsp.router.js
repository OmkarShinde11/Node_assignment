const express=require('express');
const coreUspRouter=express.Router();
const { getUspCores, createCoreUsp, getSingleCoreUsp, updateCoreUsp, deleteCoreUsp,uploadPhoto, reorderCoreUsp } = require('../controller/coreUspController');
const { protect } = require('../controller/authController');


coreUspRouter.route('/').get(getUspCores);
coreUspRouter.route('/createCoreUsp').post(protect,uploadPhoto,createCoreUsp);
coreUspRouter.route('/reorderCoreUsp').patch(protect,reorderCoreUsp);
coreUspRouter.route('/:id').get(getSingleCoreUsp).patch(protect,uploadPhoto,updateCoreUsp).delete(protect,deleteCoreUsp);

module.exports=coreUspRouter;