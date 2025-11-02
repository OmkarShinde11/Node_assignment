const mongoose=require('mongoose');

const coreUspsSchema=new mongoose.Schema({
    Image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    redirectLink: {
        type: String,
        default: ''
    },
    displayOrder:{
        type:Number,
        required:true,
    }
},{ timestamps: true });

const coreUspModel=new mongoose.model('coreUspModel',coreUspsSchema);

module.exports=coreUspModel;