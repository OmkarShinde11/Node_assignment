const keyDifferentiatorsModel=require('../models/keyDifferentiatorsModel');
const fs=require('fs');
const multer=require('multer');
const path=require('path');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');
const cretaeMulterStorage = require('../utils/multerStorage');
const multerFilter = require('../utils/multerFilter');
const backgroundOperation = require('../utils/backgroundOperation');
const { getSingleData, createData, updateData, deleteData, getData, reorderData } = require('./factoryHandler');

const multerStorage=cretaeMulterStorage('keyDifferentiator','key');

const upolod=multer({
    storage:multerStorage,
    fileFilter:multerFilter,
});

const uploadPhoto=upolod.single('Image');

// const getKeyDifferentiators=catchAsync(async (req,res,next)=>{
//     const keyDifferentiators=await keyDifferentiatorsModel.find();
//     res.status(200).json({
//         status:'Success',
//         message:'keyDifferentiator retrived Successfully',
//         keyDifferentiators,
//     })
// });

const getKeyDifferentiators=getData(keyDifferentiatorsModel);

// const createkeyDifferentiators=catchAsync(async (req,res,next)=>{
//     console.log(req.body);
//     console.log(req.file);
//     const data={...req.body};
//     data.image=req?.file ? `${req.protocol}://${req.get('host')}/upload/image/keyDifferentiator/${req.file.filename}` : null;
//     console.log(data);
//     const newData=await keyDifferentiatorsModel.create(data);
//     res.status(200).json({
//         status:'Success',
//         message:'New keyDifferentiator Created Successfully',
//         newData,
//     })
// });

const createkeyDifferentiators=createData(keyDifferentiatorsModel,'keyDifferentiator');

// const getSinglekeyDifferentiator=catchAsync(async(req,res,next)=>{
//     const id=req.params.id;
//     const keyDifferentiatorDetails=await keyDifferentiatorsModel.findById(id);
//     if(!keyDifferentiatorDetails)return next(new AppError(404,`There is no such keyDifferentiator with ${id} id`));
//     res.status(200).json({
//         status:'Success',
//         message:'keyDifferentiator retrived Successfully',
//         keyDifferentiatorDetails,
//     })
// });
const getSinglekeyDifferentiator=getSingleData(keyDifferentiatorsModel);

// const updatekeyDifferentiator=catchAsync(async(req,res,next)=>{
//     const id=req.params.id;
//     let data={...req.body};
//     let oldData;
//     if(req.file){
//         console.log(req.file);
//         let oldDoc=await keyDifferentiatorsModel.findById(id);
//         if(!oldDoc) return next(new AppError(404,`There is no such keyDifferentiator with ${id} id`));
//         oldData=oldDoc.image;
//         data.image=`${req.protocol}://${req.get('host')}/upload/image/keyDifferentiator/${req.file.filename}`;
//     }
//     console.log(data);
//     const updatedData=await keyDifferentiatorsModel.findByIdAndUpdate(id,data,{new:true,runValidators:true});
//     if(!updatedData) return next(new AppError(404,`There is no such keyDifferentiator with ${id} id`));

//     res.status(200).json({
//         status:'Success',
//         message:'keyDifferentiator Updated Successfully',
//         updatedData
//     });

//     // This Operation runs in background to clear and maintain disk storage.
//     if(oldData!==undefined){
//         backgroundOperation(oldData,'keyDifferentiator');
//     }
// });

const updatekeyDifferentiator=updateData(keyDifferentiatorsModel,'keyDifferentiator',true);


// const deletekeyDifferentiators=catchAsync(async (req,res,next)=>{
//     const id=req.params.id;
//     let oldData=await keyDifferentiatorsModel.findById(id);
//     let oldImage=oldData.image;
//     const doc=await keyDifferentiatorsModel.findByIdAndDelete(id);
//     if(!doc){
//         return next(new AppError(404,`There is no such keyDifferentiator with ${id}`));
//     }
//     res.status(200).json({
//         status:'Success',
//         message:'keyDifferentiators Deleted Successfully',
//     });

//     if(oldImage!==undefined){
//         backgroundOperation(oldImage,'keyDifferentiator');
//     }
// });

const deletekeyDifferentiators=deleteData(keyDifferentiatorsModel,'keyDifferentiator',true);
const reorderKeyDifferenciators=reorderData(keyDifferentiatorsModel);

module.exports={
    updatekeyDifferentiator,deletekeyDifferentiators,getKeyDifferentiators,getSinglekeyDifferentiator,createkeyDifferentiators,uploadPhoto,reorderKeyDifferenciators
}
