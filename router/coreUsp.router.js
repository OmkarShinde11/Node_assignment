const express=require('express');
const coreUspRouter=express.Router();
const { getUspCores, createCoreUsp, getSingleCoreUsp, updateCoreUsp, deleteCoreUsp,uploadPhoto } = require('../controller/coreUspController');


coreUspRouter.route('/').get(getUspCores);
coreUspRouter.route('/createCoreUsp').post(uploadPhoto,createCoreUsp);
coreUspRouter.route('/:id').get(getSingleCoreUsp).patch(uploadPhoto,updateCoreUsp).delete(deleteCoreUsp);

module.exports=coreUspRouter;