const User=require('../models/userModel');
const jwt=require('jsonwebtoken');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

const jwtToken=(userID)=>{
    return jwt.sign({id:userID},process.env.SECRET_KEY,{expiresIn:process.env.EXPIRES_IN})
}

const signUp=catchAsync(async(req,res,next)=>{
    const newUser=await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        passwordConfirm:req.body.passwordConfirm,
    });

    newUser.password=undefined;  // this code is written because i output i don't want to show a password.
    newUser.passwordConfirm=undefined;

    const token=jwtToken(newUser._id);

    res.status(200).json({
        status:'success',
        message:'User Created Successfully',
        token,
        newUser,
    })
});


const login=catchAsync(async(req,res,next)=>{
    const { email,password }=req.body;
    // check email & password present in req.body
    if(!email && !password){
        return next(new AppError(400,'email & password required.'));
    }
    // check user is exist
    const user=await User.findOne({email:email}).select('+password');
    if(!user){
        return next(new AppError(400,'User not found'));
    }
    // check password enter by user is correct or not.
    const check=await user.checkPassword(password,user.password);
    if(!check){
        return next(new AppError(400,`Password Was Changed.You're entering an old password`));
    }
    //send a token
    const token=jwtToken(user._id);
    res.status(200).json({
        status:'Success',
        message:'User login Successfully',
        token,
        user,
    })
});

const protect=catchAsync(async (req,res,next)=>{
    let token=req?.headers?.authorization;
    token=token?.split(' ')?.[1];
    console.log(token);
    // check the token is pass or not.
    if(!token){
        return next(new AppError(401,`You're not login please login then try`));
    }
    // verify a token
    const verifyToken=jwt.verify(token,process.env.SECRET_KEY);
    console.log(verifyToken);
    if(!verifyToken){
        return next(new AppError(401,'Token is not valid please login again then try'));
    }
    const user=await User.findOne({_id:verifyToken.id});
    if(!user){
        return next(new AppError(401,'User Not Found'));
    }
    req.user=user;
    next();
});

const restrictTo=(roles)=>{
    return (req,res,next)=>{
        if(req.user.role!==roles){
            return next(new AppError(400,`You don't have permission to peform this task.`));
        }
        next();
    }
}

const createAdminUser=catchAsync(async (req,res,next)=>{
    const adminUser=await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        passwordConfirm:req.body.passwordConfirm,
        role:req.body.role
    });

    res.status(200).json({
        status:'Success',
        message:'Admin USer Created Successfully',
    })
});

const getAuthUser=catchAsync(async (req,res,next)=>{
    res.status(200).json({
        status: "success",
        user: req.user,
    });
})

module.exports={signUp,login,protect,restrictTo,createAdminUser,getAuthUser}