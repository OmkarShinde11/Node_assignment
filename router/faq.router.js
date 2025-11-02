const express=require('express');
const { getFaq, cretaeFaq, getSingleFaq, updateFaq, deleteFaq,uploadPhoto, reorderFaq } = require('../controller/faqController');
const { protect } = require('../controller/authController');
const faqsRouter=express.Router();

faqsRouter.route('/').get(getFaq);
faqsRouter.route('/createFaq').post(protect,uploadPhoto,cretaeFaq);
faqsRouter.route('/reorderFaq').patch(protect,reorderFaq);
faqsRouter.route('/:id').get(getSingleFaq).patch(protect,uploadPhoto,updateFaq).delete(protect,deleteFaq);
module.exports=faqsRouter;