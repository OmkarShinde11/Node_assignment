const AppError = require("./AppError");

const multerFilter=(req,file,cb)=>{
    if(file?.mimetype?.startsWith('image')){
        cb(null,true);
    }
    else{
        cb(new AppError(400,'No Image, Please upload an image'),false);
    }
};

module.exports=multerFilter;