const multer = require("multer");
const cretaeMulterStorage = require("./multerStorage");
const multerFilter = require("./multerFilter");

const upolod=multer({
    storage:cretaeMulterStorage(),
    fileFilter:multerFilter,
});

module.exports=upolod.single('Image');