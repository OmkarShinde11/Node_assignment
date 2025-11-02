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

const getUspCores=getData(coreUspModel);

const createCoreUsp=createData(coreUspModel,'UspIcons');

const updateCoreUsp=updateData(coreUspModel,'UspIcons',true);

const getSingleCoreUsp=getSingleData(coreUspModel);

const deleteCoreUsp=deleteData(coreUspModel,'UspIcons',true);
const reorderCoreUsp=reorderData(coreUspModel);

module.exports={getUspCores,updateCoreUsp,createCoreUsp,getSingleCoreUsp,deleteCoreUsp,uploadPhoto,reorderCoreUsp};