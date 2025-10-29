const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcryptjs');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        unique:true,
        required:[true,'user name is required'],
    },
    email:{
        type:String,
        required:[true,'Useremail is required'],
        lowercase:true,
        unique:true,
        validate:[validator.isEmail,'Please provide an valid email address'],
    },
    password:{
        type:String,
        required:[true,'Password is required'],
        minLength:8,
        select:false,
    },
    passwordConfirm:{
        type:String,
        required:[true,'PasswordConfirm is required'],
        validate:{
            validator:function(el){
                return el===this.password
            },
            message:'Password is not matched' 
        }
    },
    role:{
        type:String,
        default:'user',
    }
});

// document middleware
userSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next();
    this.password=await bcrypt.hash(this.password,12);  
    this.passwordConfirm=undefined;
    next();
})

userSchema.methods.checkPassword=async function(userEnterPassword,dbPassword){
    return await bcrypt.compare(userEnterPassword,dbPassword);
}

const userModel=new mongoose.model('user',userSchema);

module.exports=userModel;