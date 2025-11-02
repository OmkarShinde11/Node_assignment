const coreUspModel=require('../models/coreUspModel')
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
const multerStorage=cretaeMulterStorage('UspIcons','uspIcon');

// cretae multer configuration
const upolod=multer({
    storage:multerStorage,
    fileFilter:multerFilter,
});

const uploadPhoto=upolod.single('Image');

// const getUspCores=catchAsync(async (req,res,next)=>{
//     const coreUsp=await coreUspModel.find();
//     res.status(200).json({
//         status:'Success',
//         message:'Core Usp retrived Successfully',
//         coreUsp,
//     })
// });

const getUspCores=getData(coreUspModel);


// const createCoreUsp=catchAsync(async (req,res,next)=>{
//     console.log(req.body);
//     console.log(req.file);
//     const data={...req.body};
//     data.icon=req?.file ? `${req.protocol}://${req.get('host')}/upload/image/UspIcons/${req.file.filename}` : null;
//     console.log(data);
//     const newData=await coreUspModel.create(data);
//     res.status(200).json({
//         status:'Success',
//         message:'New coreUsp Created Successfully',
//         newData,
//     })
// });
const createCoreUsp=createData(coreUspModel,'UspIcons');

// const updateCoreUsp=catchAsync(async(req,res,next)=>{
//     const id=req.params.id;
//     let data={...req.body};
//     let oldData;
//     if(req.file){
//         console.log(req.file);
//         let oldDoc=await coreUspModel.findById(id);
//         if(!oldDoc) return next(new AppError(404,`There is no such Core Usp with ${id} id`));
//         oldData=oldDoc.icon;
//         data.icon=`${req.protocol}://${req.get('host')}/upload/image/UspIcons/${req.file.filename}`;
//     }
//     console.log(data);
//     const updatedCoreUsp=await coreUspModel.findByIdAndUpdate(id,data,{new:true,runValidators:true});
//     if(!updatedCoreUsp) return next(new AppError(404,`There is no such Core Usp with ${id} id`));

//     res.status(200).json({
//         status:'Success',
//         message:'Core Usp Updated Successfully',
//         updatedCoreUsp
//     });

//     // This Operation runs in background to clear and maintain disk storage.
//     if(oldData!==undefined){
//         backgroundOperation(oldData,'UspIcons');
//     }
// });

const updateCoreUsp=updateData(coreUspModel,'UspIcons',true);


// const getSingleCoreUsp=catchAsync(async(req,res,next)=>{
//     const id=req.params.id;
//     const coreUspDetails=await coreUspModel.findById(id);
//     if(!coreUspDetails)return next(new AppError(404,`There is no such Core Usp with ${id} id`));
//     res.status(200).json({
//         status:'Success',
//         message:'Core Usp retrived Successfully',
//         coreUspDetails,
//     })
// });

const getSingleCoreUsp=getSingleData(coreUspModel);

// const deleteCoreUsp=catchAsync(async (req,res,next)=>{
//     const id=req.params.id;
//     let oldData=await coreUspModel.findById(id);
//     let oldImage=oldData.icon;
//     const doc=await coreUspModel.findByIdAndDelete(id);
//     if(!doc){
//         return next(new AppError(404,`There is no such Core Usp with ${id}`));
//     }
//     res.status(200).json({
//         status:'Success',
//         message:'Core Usp Deleted Successfully',
//     });

//     if(oldImage!==undefined){
//         backgroundOperation(oldImage,'UspIcons');
//     }
// });

const deleteCoreUsp=deleteData(coreUspModel,'UspIcons',true);
const reorderCoreUsp=reorderData(coreUspModel);

module.exports={getUspCores,updateCoreUsp,createCoreUsp,getSingleCoreUsp,deleteCoreUsp,uploadPhoto,reorderCoreUsp};