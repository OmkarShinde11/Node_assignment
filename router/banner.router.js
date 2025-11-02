const express=require('express');
const { getBanner,createBanner,uploadPhoto,updateBanner, deleteBanner,getSingleBanner,reorderBanner } = require('../controller/bannerController');
const { protect } = require('../controller/authController');
const bannerRouter=express.Router();

bannerRouter.route('/').get(getBanner);
bannerRouter.route('/createBanner').post(protect,uploadPhoto,createBanner);
bannerRouter.route('/reorderBanner').patch(protect,reorderBanner);
bannerRouter.route('/:id').get(getSingleBanner).patch(protect,uploadPhoto,updateBanner).delete(protect,deleteBanner);

module.exports=bannerRouter;