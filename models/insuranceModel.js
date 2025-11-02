const mongoose=require('mongoose');
const insuranceSchema=new mongoose.Schema({
    Image:{
        type: String,
        required: true
    },
    displayOrder:{
        type:Number,
        required:true,
    }
},{ timestamps: true });

const insuranceModel=new mongoose.model('insuranceModel',insuranceSchema);

module.exports=insuranceModel;