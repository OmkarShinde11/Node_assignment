const faqModel=require('../models/faqModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');
const multer=require('multer');
const multerFilter = require('../utils/multerFilter');
const cretaeMulterStorage = require('../utils/multerStorage');
const { getSingleData, updateData, deleteData, getData, createData, reorderData } = require('./factoryHandler');

const cretaeFaq=createData(faqModel);

const getFaq=getData(faqModel);

const getSingleFaq=getSingleData(faqModel);

const multerStorage=cretaeMulterStorage('test','test');

const upolod=multer({
    storage:multerStorage,
    fileFilter:multerFilter,
});

const uploadPhoto=upolod.none();
const updateFaq=updateData(faqModel);

const deleteFaq=deleteData(faqModel);

const reorderFaq=reorderData(faqModel);

module.exports={cretaeFaq,getFaq,getSingleFaq,deleteFaq,updateFaq,uploadPhoto,reorderFaq};