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

const getExperties=getData(expertiesModel);

const createExperties=createData(expertiesModel,'Experties');

const updateExperties=updateData(expertiesModel,'Experties',true);

const getSingleExperties=getSingleData(expertiesModel);

const deleteExperties=deleteData(expertiesModel,'Experties',true);
const reorderExperties=reorderData(expertiesModel);

module.exports={getExperties,createExperties,getSingleExperties,updateExperties,deleteExperties,uploadPhoto,reorderExperties};