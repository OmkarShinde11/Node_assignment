const mongoose=require('mongoose');

const awardSchema=new mongoose.Schema({
    Image:{
        type: String,
        required: true
    },
    
},{ timestamps: true });

const awardModel=new mongoose.model('awardModel',awardSchema);

module.exports=awardModel;