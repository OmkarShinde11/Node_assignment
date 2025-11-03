const express=require('express');
const { getFaq, cretaeFaq, getSingleFaq, updateFaq, deleteFaq,uploadPhoto, reorderFaq } = require('../controller/faqController');
const { protect, restrictTo } = require('../controller/authController');
const faqsRouter=express.Router();

faqsRouter.route('/').get(getFaq);
faqsRouter.route('/createFaq').post(protect,restrictTo('admin'),uploadPhoto,cretaeFaq);
faqsRouter.route('/reorderFaq').patch(protect,restrictTo('admin'),reorderFaq);
faqsRouter.route('/:id').get(getSingleFaq).patch(protect,restrictTo('admin'),uploadPhoto,updateFaq).delete(protect,restrictTo('admin'),deleteFaq);
module.exports=faqsRouter;