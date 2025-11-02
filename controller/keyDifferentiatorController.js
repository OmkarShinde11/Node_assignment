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

const getKeyDifferentiators=getData(keyDifferentiatorsModel);

const createkeyDifferentiators=createData(keyDifferentiatorsModel,'keyDifferentiator');

const getSinglekeyDifferentiator=getSingleData(keyDifferentiatorsModel);

const updatekeyDifferentiator=updateData(keyDifferentiatorsModel,'keyDifferentiator',true);

const deletekeyDifferentiators=deleteData(keyDifferentiatorsModel,'keyDifferentiator',true);
const reorderKeyDifferenciators=reorderData(keyDifferentiatorsModel);

module.exports={
    updatekeyDifferentiator,deletekeyDifferentiators,getKeyDifferentiators,getSinglekeyDifferentiator,createkeyDifferentiators,uploadPhoto,reorderKeyDifferenciators
}
