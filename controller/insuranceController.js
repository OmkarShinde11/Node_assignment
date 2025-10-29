const insuranceModel=require('../models/insuranceModel');
const multerFilter = require('../utils/multerFilter');
const cretaeMulterStorage = require('../utils/multerStorage');
const { getData, getSingleData, createData, updateData, deleteData } = require('./factoryHandler');
const multer=require('multer');

const multerStorage=cretaeMulterStorage('Insurance','insurance');
const upolod=multer({
    storage:multerStorage,
    fileFilter:multerFilter,
});

const uploadPhoto=upolod.single('Image');


const getInsurance=getData(insuranceModel);
const getsingleInsurance=getSingleData(insuranceModel);
const createInsurance=createData(insuranceModel,'Insurance',true);
const updateInsurance=updateData(insuranceModel,'Insurance',true);
const deleteInsurance=deleteData(insuranceModel,'Insurance',true);


module.exports={uploadPhoto,getInsurance,getsingleInsurance,createInsurance,updateInsurance,deleteInsurance};