const express=require('express');
const { getBanner,createBanner,uploadPhoto,updateBanner, deleteBanner,getSingleBanner } = require('../controller/bannerController');
const { protect } = require('../controller/authController');
const bannerRouter=express.Router();

bannerRouter.route('/').get(getBanner);
bannerRouter.route('/createBanner').post(uploadPhoto,createBanner);
bannerRouter.route('/:id').get(getSingleBanner).patch(uploadPhoto,updateBanner).delete(deleteBanner);

module.exports=bannerRouter;