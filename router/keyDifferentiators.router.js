const express=require('express');
const keyDifferentiatorsRouter=express.Router();
const { getKeyDifferentiators,createkeyDifferentiators,getSinglekeyDifferentiator,uploadPhoto,updatekeyDifferentiator,deletekeyDifferentiators } = require('../controller/keyDifferentiatorController');

keyDifferentiatorsRouter.route('/').get(getKeyDifferentiators);
keyDifferentiatorsRouter.route('/createkeyDifferentiators').post(uploadPhoto,createkeyDifferentiators);
keyDifferentiatorsRouter.route('/:id').get(getSinglekeyDifferentiator).patch(uploadPhoto,updatekeyDifferentiator).delete(deletekeyDifferentiators);

module.exports=keyDifferentiatorsRouter;