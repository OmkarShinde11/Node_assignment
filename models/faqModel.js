const mongoose=require('mongoose');

const faqSchema=new mongoose.Schema({
    question:{
        type: String,
        required: true,
        trim: true
    },
    answer:{
        type: String,
        required: true,
        trim: true
    },
    displayOrder:{
        type:Number,
        required:true,
    }
},{ timestamps: true });

const faqModel=new mongoose.model('faqModel',faqSchema);

module.exports=faqModel;