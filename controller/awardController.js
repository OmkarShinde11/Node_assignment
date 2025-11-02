const awardModel=require('../models/awardsModel');
const multerFilter = require('../utils/multerFilter');
const cretaeMulterStorage = require('../utils/multerStorage');
const { getData, getSingleData, createData, updateData, deleteData, reorderData } = require('./factoryHandler');
const multer=require('multer');

const multerStorage=cretaeMulterStorage('Awards','award');
const upolod=multer({
    storage:multerStorage,
    fileFilter:multerFilter,
});

const uploadPhoto=upolod.single('Image');


const getAwards=getData(awardModel);
const getsingleAward=getSingleData(awardModel);
const createAward=createData(awardModel,'Awards',true);
const updateAward=updateData(awardModel,'Awards',true);
const deleteAward=deleteData(awardModel,'Awards',true);
const reorderAward=reorderData(awardModel);

module.exports={uploadPhoto,getAwards,getsingleAward,createAward,updateAward,deleteAward,reorderAward};