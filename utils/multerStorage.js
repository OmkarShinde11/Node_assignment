const multer = require("multer");
const fs=require('fs');
const path=require('path');
const cretaeMulterStorage=(folderPath,prefixName)=>{
    return multer.diskStorage({
        destination:(req,file,cb)=>{
            // const uploadPath=path.join(__dirname,'../upload/image/bannerImage');
            const uploadPath=path.resolve(`upload/image/${folderPath}`);
            if(!fs.existsSync(uploadPath)){
                fs.mkdirSync(uploadPath,{recursive:true});
            }
            cb(null,uploadPath);
        },
        filename:(req,file,cb)=>{
            console.log(file);
            const ext=file.mimetype.split('/')[1];
            const fileName=`user-${Date.now()}-${prefixName}.${ext}`;
            cb(null,fileName);
        }
    });
};

module.exports=cretaeMulterStorage;