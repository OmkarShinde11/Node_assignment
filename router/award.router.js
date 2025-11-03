const express=require('express');
const { uploadPhoto, createAward, getsingleAward, updateAward, deleteAward, getAwards, reorderAward } = require('../controller/awardController');
const { protect, restrictTo } = require('../controller/authController');
const awardRouter=express.Router();


awardRouter.route('/').get(getAwards);
awardRouter.route('/createAward').post(protect,restrictTo('admin'),uploadPhoto,createAward);
awardRouter.route('/reorderAward').patch(protect,restrictTo('admin'),reorderAward);
awardRouter.route('/:id').get(getsingleAward).patch(protect,restrictTo('admin'),uploadPhoto,updateAward).delete(protect,restrictTo('admin'),deleteAward);

module.exports=awardRouter;

