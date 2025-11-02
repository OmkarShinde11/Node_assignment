const express=require('express');
const keyDifferentiatorsRouter=express.Router();
const { getKeyDifferentiators,createkeyDifferentiators,getSinglekeyDifferentiator,uploadPhoto,updatekeyDifferentiator,deletekeyDifferentiators, reorderKeyDifferenciators } = require('../controller/keyDifferentiatorController');
const { protect } = require('../controller/authController');

keyDifferentiatorsRouter.route('/').get(getKeyDifferentiators);
keyDifferentiatorsRouter.route('/createkeyDifferentiators').post(protect,uploadPhoto,createkeyDifferentiators);
keyDifferentiatorsRouter.route('/reorderKeyDifferentiators').patch(protect,reorderKeyDifferenciators);
keyDifferentiatorsRouter.route('/:id').get(getSinglekeyDifferentiator).patch(protect,uploadPhoto,updatekeyDifferentiator).delete(protect,deletekeyDifferentiators);

module.exports=keyDifferentiatorsRouter;