const mongoose=require('mongoose');

const expertiesSchema=new mongoose.Schema({
    Image:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    displayOrder:{
        type:Number,
        required:true,
    }
},{ timestamps: true });

const expertiesModel=new mongoose.model('expertiesModel',expertiesSchema);

module.exports=expertiesModel;