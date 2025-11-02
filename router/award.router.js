const express=require('express');
const { uploadPhoto, createAward, getsingleAward, updateAward, deleteAward, getAwards, reorderAward } = require('../controller/awardController');
const { protect } = require('../controller/authController');
const awardRouter=express.Router();


awardRouter.route('/').get(getAwards);
awardRouter.route('/createAward').post(protect,uploadPhoto,createAward);
awardRouter.route('/reorderAward').patch(protect,reorderAward);
awardRouter.route('/:id').get(getsingleAward).patch(protect,uploadPhoto,updateAward).delete(protect,deleteAward);

module.exports=awardRouter;

