const bannerModel = require("../models/bannerModel");
const catchAsync = require("../utils/catchAsync");
const multer=require('multer');
const fs=require('fs');
const path=require('path');
const AppError = require("../utils/AppError");
const cretaeMulterStorage = require("../utils/multerStorage");
const multerFilter = require("../utils/multerFilter");
const backgroundOperation = require("../utils/backgroundOperation");
const { getSingleData, createData, updateData, deleteData, getData, reorderData } = require("./factoryHandler");

// Multer Uasgae

// declare multerStorage
const multerStorage=cretaeMulterStorage('bannerImage','banner');

// cretae multer configuration
const upolod=multer({
    storage:multerStorage,
    fileFilter:multerFilter,
});

const uploadPhoto=upolod.single('Image');

// const getBanner=catchAsync(async (req,res,next)=>{
//     const banners=await bannerModel.find();
//     res.status(200).json({
//         status:'Success',
//         message:'Banners retrived Successfully',
//         banners,
//     })
// });

const getBanner=getData(bannerModel);

// const createBanner=catchAsync(async (req,res,next)=>{
//     console.log(req.body);
//     console.log(req.file);
//     const data={...req.body};
//     data.bannerImage=req?.file ? `${req.protocol}://${req.get('host')}/upload/image/bannerImage/${req.file.filename}` : null;
//     console.log(data);
//     const newBanner=await bannerModel.create(data);
//     res.status(200).json({
//         status:'Success',
//         message:'New Banner Created Successfully',
//         newBanner,
//     })
// });
const createBanner=createData(bannerModel,'bannerImage');

// const updateBanner=catchAsync(async(req,res,next)=>{
//     const bannerId=req.params.bannerId;
//     let data={...req.body};
//     let oldBannerImage;
//     if(req.file){
//         console.log(req.file);
//         let oldDoc=await bannerModel.findById(bannerId);
//         if(!oldDoc) return next(new AppError(404,`There is no such banner with ${bannerId} id`));
//         oldBannerImage=oldDoc.bannerImage;
//         data.bannerImage=`${req.protocol}://${req.get('host')}/upload/image/bannerImage/${req.file.filename}`;
//     }
//     console.log(data);

//     const updatedBanner=await bannerModel.findByIdAndUpdate(bannerId,data,{new:true,runValidators:true});
//     if(!updatedBanner) return next(new AppError(404,`There is no such banner with ${bannerId} id`));

//     res.status(200).json({
//         status:'Success',
//         message:'Banner Updated Successfully',
//         updatedBanner
//     });

//     // This Operation runs in background to clear and maintain disk storage.
//     if(oldBannerImage!==undefined){
//         backgroundOperation(oldBannerImage,'bannerImage');
//     }
// });

const updateBanner=updateData(bannerModel,'bannerImage',true);


// const getSingleBanner=catchAsync(async(req,res,next)=>{
//     const bannerId=req.params.id;
//     const bannerDetails=await bannerModel.findById(bannerId);
//     if(!bannerDetails)return next(new AppError(404,`There is no such banner with ${bannerId} id`));
//     res.status(200).json({
//         status:'Success',
//         message:'Banner retrived Successfully',
//         bannerDetails,
//     })
// });
const getSingleBanner=getSingleData(bannerModel);

// const deleteBanner=catchAsync(async (req,res,next)=>{
//     const bannerId=req.params.bannerId;
//     let oldBanner=await bannerModel.findById(bannerId);
//     let oldBannerImage=oldBanner.bannerImage;
//     const doc=await bannerModel.findByIdAndDelete(bannerId);
//     if(!doc){
//         return next(new AppError(404,`There is no such banner with ${bannerId}`));
//     }
//     res.status(200).json({
//         status:'Success',
//         message:'Banner Deleted Successfully',
//     });

//     if(oldBannerImage!==undefined){
//         backgroundOperation(oldBannerImage,'bannerImage');
//     }
// });
const deleteBanner=deleteData(bannerModel,'bannerImage',true);

// const backgroundOperation=(oldBannerImage)=>{
//     const fileName=path.basename(oldBannerImage);
//     const filePath=path.join(__dirname,'../upload/image/bannerImage',fileName);
//     console.log(filePath);
//     fs.unlink(filePath,(err)=>{
//         if (err) console.error('Error deleting old image:', err);
//         else console.log('Old image deleted:', filePath);
//     });
// }

const reorderBanner=reorderData(bannerModel);
module.exports={getBanner,createBanner,uploadPhoto,updateBanner,deleteBanner,getSingleBanner,reorderBanner};