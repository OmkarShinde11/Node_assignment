const express=require('express');
const { getBanner,createBanner,uploadPhoto,updateBanner, deleteBanner,getSingleBanner,reorderBanner } = require('../controller/bannerController');
const { protect, restrictTo } = require('../controller/authController');
const bannerRouter=express.Router();

bannerRouter.route('/').get(getBanner);
bannerRouter.route('/createBanner').post(protect,restrictTo('admin'),uploadPhoto,createBanner);
bannerRouter.route('/reorderBanner').patch(protect,restrictTo('admin'),reorderBanner);
bannerRouter.route('/:id').get(getSingleBanner).patch(protect,restrictTo('admin'),uploadPhoto,updateBanner).delete(protect,restrictTo('admin'),deleteBanner);

module.exports=bannerRouter;