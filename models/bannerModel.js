const mongoose=require('mongoose');

const bannerSchema=new mongoose.Schema({
    title: { 
        type: String,
        unique:true,
        trim:true,
        required: [true,'A title is required'],
    },
    subtitle: { 
        type: String,
        default:null,
        trim:true
    },
    description:{
        type:String,
        default:null,
        trim:true,
    },
    ctaText: { 
        type: String,
        required:[true,'ctaText is required'],
        trim:true,
    },
    ctaLink: { 
        type: String,
        required:[true,'ctaLink is required'],
    },
    Image: {
        type: String,
        required: true
    },
}, { timestamps: true });

const bannerModel=new mongoose.model('bannerModel',bannerSchema);

module.exports=bannerModel;