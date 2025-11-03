const express=require('express');
const keyDifferentiatorsRouter=express.Router();
const { getKeyDifferentiators,createkeyDifferentiators,getSinglekeyDifferentiator,uploadPhoto,updatekeyDifferentiator,deletekeyDifferentiators, reorderKeyDifferenciators } = require('../controller/keyDifferentiatorController');
const { protect, restrictTo } = require('../controller/authController');

keyDifferentiatorsRouter.route('/').get(getKeyDifferentiators);
keyDifferentiatorsRouter.route('/createkeyDifferentiators').post(protect,restrictTo('admin'),uploadPhoto,createkeyDifferentiators);
keyDifferentiatorsRouter.route('/reorderKeyDifferentiators').patch(protect,restrictTo('admin'),reorderKeyDifferenciators);
keyDifferentiatorsRouter.route('/:id').get(getSinglekeyDifferentiator).patch(protect,restrictTo('admin'),uploadPhoto,updatekeyDifferentiator).delete(protect,restrictTo('admin'),deletekeyDifferentiators);

module.exports=keyDifferentiatorsRouter;