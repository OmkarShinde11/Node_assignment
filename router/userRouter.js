const express=require('express');
const { signUp,login, restrictTo,createAdminUser, protect } = require('../controller/authController');
const userRouter=express.Router();

userRouter.route('/signUp').post(signUp);
userRouter.route('/login').post(login);
userRouter.route('/admin/create-admin').post(protect,restrictTo('admin'),createAdminUser);

module.exports=userRouter
