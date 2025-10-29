const express=require('express');
const { getFaq, cretaeFaq, getSingleFaq, updateFaq, deleteFaq } = require('../controller/faqController');
const faqsRouter=express.Router();

faqsRouter.route('/').get(getFaq);
faqsRouter.route('/createFaq').post(cretaeFaq);
faqsRouter.route('/:id').get(getSingleFaq).patch(updateFaq).delete(deleteFaq);
module.exports=faqsRouter;