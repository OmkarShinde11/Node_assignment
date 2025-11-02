const mongoose=require('mongoose');

const keyDifferentiatorsSchema=new mongoose.Schema({
    Image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    displayOrder:{
        type:Number,
        required:true,
    }
}, { timestamps: true });

const keyDifferentiatorsModel=new mongoose.model('keyDifferentiatorsModel',keyDifferentiatorsSchema);

module.exports=keyDifferentiatorsModel;