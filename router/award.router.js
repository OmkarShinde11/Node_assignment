const express=require('express');
const { uploadPhoto, createAward, getsingleAward, updateAward, deleteAward, getAwards } = require('../controller/awardController');
const awardRouter=express.Router();


awardRouter.route('/').get(getAwards);
awardRouter.route('/createAward').post(uploadPhoto,createAward);
awardRouter.route('/:id').get(getsingleAward).patch(uploadPhoto,updateAward).delete(deleteAward);

module.exports=awardRouter;

