const express=require('express');
const cors=require('cors');
const helmet=require('helmet');
const xss=require('xss-clean');
const rateLimit=require('express-rate-limit');

const app=express();

// secure HTTP Headers
app.use(helmet());

// limit request for api prevent Dos attack.
const limit=rateLimit({
    max:10000,
    windowMs:60*60*1000,
    message:'Too many request from this Ip, please try again in an hour',
});
app.use('/api',limit);

app.use(cors());
// used to read a req.body.
app.use(express.json({limit:'10kb'}));

// Data Sanitization against xss
app.use(xss());

// Serving Static Files 
app.use('/upload', express.static('upload'));

const globalMiddleware=require('./controller/errorController');

const bannerRouter=require('./router/banner.router');
const awardRouter = require('./router/award.router');
const expertiesRouter = require('./router/experties.router');
const faqsRouter = require('./router/faq.router');
const insuranceRouter = require('./router/insurance.router');
const coreUspRouter = require('./router/coreUsp.router');
const keyDifferentiatorsRouter = require('./router/keyDifferentiators.router');
const userRouter = require('./router/userRouter');
const AppError = require('./utils/AppError');


// Router Defination
app.use('/api/v1/banner',bannerRouter);
app.use('/api/v1/awards',awardRouter);
app.use('/api/v1/experties',expertiesRouter);
app.use('/api/v1/faqs',faqsRouter);
app.use('/api/v1/insurance',insuranceRouter);
app.use('/api/v1/coreUsp',coreUspRouter);
app.use('/api/v1/keyDifferentiators',keyDifferentiatorsRouter);
app.use('/api/v1/user',userRouter);

app.all('/*',(req,res,next)=>{
    const err=new AppError(404,`Can't find the ${req.originalUrl}`);
});

app.use(globalMiddleware);


module.exports=app;