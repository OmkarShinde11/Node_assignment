const express=require('express');
const { signUp,login, restrictTo,createAdminUser, protect, getAuthUser } = require('../controller/authController');
const userRouter=express.Router();

userRouter.route('/signUp').post(signUp);
userRouter.route('/login').post(login);
userRouter.route('/getAuthUser').get(protect,getAuthUser)
userRouter.route('/admin/create-admin').post(protect,restrictTo('admin'),createAdminUser);

module.exports=userRouter
