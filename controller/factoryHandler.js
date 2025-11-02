const AppError = require("../utils/AppError");
const backgroundOperation = require("../utils/backgroundOperation");
const catchAsync = require("../utils/catchAsync");

const getSingleData=(Model)=>(
    catchAsync(async(req,res,next)=>{
        const id=req.params.id;
        const itemDetails=await Model.findById(id);
        if(!itemDetails)return next(new AppError(404,`There is no such data with ${id} id`));
        res.status(200).json({
            status:'Success',
            message:'Data retrived Successfully',
            itemDetails,
        });
    })
);

const updateData=(Model,folderPath=null,operation=false)=>(
    catchAsync(async(req,res,next)=>{
        const id=req.params.id;
        let data={...req.body};
        let oldData;
        if(req.file){
            console.log(req.file);
            let oldDoc=await Model.findById(id);
            if(!oldDoc) return next(new AppError(404,`There is no such document with ${id} id`));
            oldData=oldDoc.Image;
            data.Image=`${req.protocol}://${req.get('host')}/upload/image/${folderPath}/${req.file.filename}`;
        }
        console.log(data);
    
        const updatedDoc=await Model.findByIdAndUpdate(id,data,{new:true,runValidators:true});
        if(!updatedDoc) return next(new AppError(404,`There is no such document with ${id} id`));
    
        res.status(200).json({
            status:'Success',
            message:'Document Updated Successfully',
            updatedDoc
        });
    
        // This Operation runs in background to clear and maintain disk storage.
        if(oldData!==undefined && operation){
            backgroundOperation(oldData,folderPath);
        }
    })
);

const createData=(Model,folderPath=null)=>(
    catchAsync(async (req,res,next)=>{
        const lastItem = await Model.findOne().sort({ displayOrder: -1 });
        const newOrder = lastItem ? lastItem.displayOrder + 1 : 1;
        console.log(req.body);
        console.log(req.file);
        const data={...req.body};
        if(req.file){
            data.Image=req?.file ? `${req.protocol}://${req.get('host')}/upload/image/${folderPath}/${req.file.filename}` : null;
        }
        console.log(data);
        const Doc=await Model.create({...data,displayOrder:newOrder});
        res.status(200).json({
            status:'Success',
            message:'New Document Created Successfully',
            Doc,
        });
    })
);

const deleteData=(Model,folderPath=null)=>(
    catchAsync(async (req,res,next)=>{
        const id=req.params.id;
        let oldImage;
        if(folderPath!==null){
            let oldData=await Model.findById(id);
            oldImage=oldData.Image;
        }
        const doc=await Model.findByIdAndDelete(id);
        if(!doc){
            return next(new AppError(404,`There is no such document with ${id}`));
        }

        await reindexOrder(Model);
        res.status(200).json({
            status:'Success',
            message:'Document Deleted Successfully',
        });
    
        if(oldImage!==undefined){
            backgroundOperation(oldImage,folderPath);
        }
    })
);

const getData=(Model)=>(
    catchAsync(async(req,res,next)=>{
        const data=await Model.find().sort({displayOrder:1});
        res.status(200).json({
            status:'Success',
            message:'Data retrived Successfully',
            data,
        })
    })
)

const reorderData=(Model)=>(
    catchAsync(async (req,res,next)=>{
        const data=req.body;
        if (!data || !Array.isArray(data)) {
            return next(new AppError(400,'Invalid Data, Please Provide Correct one'));
        };

        const bulkOps=data.map(item=>({
            updateOne:{
                filter:{_id:item._id},
                update:{displayOrder:item.displayOrder},
            },
        }));

        await Model.bulkWrite(bulkOps);

        res.status(200).json({
            status: 'success',
            message: 'Document reorder successfully',
        });
    })
);

const reindexOrder=async(Model)=>{
    let data=await Model.find().sort({displayOrder:1});
    const bulkOps=data.map((item,index)=>({
        updateOne:{
            filter:{_id:item._id},
            update:{displayOrder:index+1},
        }
    }));
    
  if (bulkOps.length > 0)await Model.bulkWrite(bulkOps);
}


module.exports={
    getSingleData,
    createData,
    updateData,
    deleteData,
    getData,
    reorderData
}