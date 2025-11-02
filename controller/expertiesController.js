const expertiesModel=require('../models/expertiesModel')
const catchAsync = require("../utils/catchAsync");
const multer=require('multer');
const fs=require('fs');
const path=require('path');
const AppError = require("../utils/AppError");
const cretaeMulterStorage = require("../utils/multerStorage");
const multerFilter = require("../utils/multerFilter");
const backgroundOperation = require("../utils/backgroundOperation");
const { getSingleData, createData, updateData, deleteData, getData, reorderData } = require('./factoryHandler');

// Multer Uasgae

// declare multerStorage
const multerStorage=cretaeMulterStorage('Experties','experties');

// cretae multer configuration
const upolod=multer({
    storage:multerStorage,
    fileFilter:multerFilter,
});

const uploadPhoto=upolod.single('Image');

// const getExperties=catchAsync(async (req,res,next)=>{
//     const experties=await expertiesModel.find();
//     res.status(200).json({
//         status:'Success',
//         message:'experties retrived Successfully',
//         experties,
//     })
// });

const getExperties=getData(expertiesModel);

// const createExperties=catchAsync(async (req,res,next)=>{
//     console.log(req.body);
//     console.log(req.file);
//     const data={...req.body};
//     data.icon=req?.file ? `${req.protocol}://${req.get('host')}/upload/image/Experties/${req.file.filename}` : null;
//     console.log(data);
//     const newData=await expertiesModel.create(data);
//     res.status(200).json({
//         status:'Success',
//         message:'New experties Created Successfully',
//         newData,
//     })
// });
const createExperties=createData(expertiesModel,'Experties');

// const updateExperties=catchAsync(async(req,res,next)=>{
//     const id=req.params.id;
//     let data={...req.body};
//     let oldData;
//     if(req.file){
//         console.log(req.file);
//         let oldDoc=await expertiesModel.findById(id);
//         if(!oldDoc) return next(new AppError(404,`There is no such experties with ${id} id`));
//         oldData=oldDoc.icon;
//         data.icon=`${req.protocol}://${req.get('host')}/upload/image/Experties/${req.file.filename}`;
//     }
//     console.log(data);
//     const updatedExperties=await expertiesModel.findByIdAndUpdate(id,data,{new:true,runValidators:true});
//     if(!updatedExperties) return next(new AppError(404,`There is no such experties with ${id} id`));

//     res.status(200).json({
//         status:'Success',
//         message:'Experties Updated Successfully',
//         updatedExperties
//     });

//     // This Operation runs in background to clear and maintain disk storage.
//     if(oldData!==undefined){
//         backgroundOperation(oldData,'Experties');
//     }
// });

const updateExperties=updateData(expertiesModel,'Experties',true);

// const getSingleExperties=catchAsync(async(req,res,next)=>{
//     const id=req.params.id;
//     const expertiesDetails=await expertiesModel.findById(id);
//     if(!expertiesDetails)return next(new AppError(404,`There is no such experties with ${id} id`));
//     res.status(200).json({
//         status:'Success',
//         message:'Experties retrived Successfully',
//         expertiesDetails,
//     })
// });

const getSingleExperties=getSingleData(expertiesModel);

// const deleteExperties=catchAsync(async (req,res,next)=>{
//     const id=req.params.id;
//     let oldData=await expertiesModel.findById(id);
//     let oldImage=oldData.icon;
//     const doc=await expertiesModel.findByIdAndDelete(id);
//     if(!doc){
//         return next(new AppError(404,`There is no such experities with ${id}`));
//     }
//     res.status(200).json({
//         status:'Success',
//         message:'Experities Deleted Successfully',
//     });

//     if(oldImage!==undefined){
//         backgroundOperation(oldImage,'Experties');
//     }
// });

const deleteExperties=deleteData(expertiesModel,'Experties',true);
const reorderExperties=reorderData(expertiesModel);

module.exports={getExperties,createExperties,getSingleExperties,updateExperties,deleteExperties,uploadPhoto,reorderExperties};