const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});
const mongoose=require('mongoose');
const fs=require('fs');
const path=require('path');

const app=require('./app');

try{
    const uploadPath=path.join(__dirname,'/upload/image');
    if(!fs.existsSync(uploadPath)){
        fs.mkdirSync(uploadPath,{recursive:true});
        console.log('required Folder Created');
    };
}catch(err){
    console.log('Error While Creating required Folders.');
}

// DataBase Connection
mongoose.connect(process.env.DB_CONNECTION_STRING,{useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false})
.then((res)=>{console.log('Database Connected Successfully')})
.catch((err)=>console.log(err));

const server=app.listen(process.env.PORT,()=>{
    console.log(`Server listen on port ${process.env.PORT}`);
});