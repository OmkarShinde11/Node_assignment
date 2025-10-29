const fs=require('fs');
const path=require('path');
const backgroundOperation=(oldBannerImage,folder)=>{
    const fileName=path.basename(oldBannerImage);
    const filePath=path.join(__dirname,`../upload/image/${folder}`,fileName);
    console.log(filePath);
    fs.unlink(filePath,(err)=>{
        if (err) console.error('Error deleting old image:', err);
        else console.log('Old image deleted:', filePath);
    });
}
module.exports=backgroundOperation;