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

const getBanner=getData(bannerModel);

const createBanner=createData(bannerModel,'bannerImage');

const updateBanner=updateData(bannerModel,'bannerImage',true);

const getSingleBanner=getSingleData(bannerModel);

const deleteBanner=deleteData(bannerModel,'bannerImage',true);


const reorderBanner=reorderData(bannerModel);
module.exports={getBanner,createBanner,uploadPhoto,updateBanner,deleteBanner,getSingleBanner,reorderBanner};