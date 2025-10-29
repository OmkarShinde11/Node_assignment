const faqModel=require('../models/faqModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');
const { getSingleData, updateData, deleteData, getData, createData } = require('./factoryHandler');


// const cretaeFaq=catchAsync(async(req,res,next)=>{
//     let newfaq=await faqModel.create(req.body);
//     res.status(200).json({
//         status:'Success',
//         message:'FAQ created successfully',
//         newfaq,
//     });
// });
const cretaeFaq=createData(faqModel);

// const getFaq=catchAsync(async(req,res,next)=>{
//     let faqData=await faqModel.find();
//     res.status(200).json({
//         status:'Success',
//         message:'FAQ reterived Successfully',
//         faqData,
//     })
// });

const getFaq=getData(faqModel);

// const getSingleFaq=catchAsync(async(req,res,next)=>{
//     const id=req.params.id;
//     let faqDetails=await faqModel.findById(id);
//     if(!faqDetails){
//         return next(new AppError(404,`There is no faq data with ${id}`));
//     };
//     res.status(200).json({
//         status:'Success',
//         message:'FAQ reterived successfully',
//         faqDetails,
//     })
// });

const getSingleFaq=getSingleData(faqModel);

// const updateFaq=catchAsync(async(req,res,next)=>{
//     const id=req.params.id;
//     let updatedData=await faqModel.findByIdAndUpdate(id,req.body,{new:true,runValidators:true});
//     if(!updatedData){
//         return next(new AppError(404,`There is no faq data with ${id}`));
//     };
//     res.status(200).json({
//         status:'Success',
//         message:'FAQ Updated successfully',
//         updatedData,
//     })
// });

const updateFaq=updateData(faqModel);

// const deleteFaq=catchAsync(async(req,res,next)=>{
//     const id=req.params.id;
//     let data=await faqModel.findByIdAndDelete(id);
//     if(!data){
//         return next(new AppError(404,`There is no faq data with ${id}`));
//     };
//     res.status(200).json({
//         status:'Success',
//         message:'FAQ Deleted successfully',
//     })
// });
const deleteFaq=deleteData(faqModel);

module.exports={cretaeFaq,getFaq,getSingleFaq,deleteFaq,updateFaq};