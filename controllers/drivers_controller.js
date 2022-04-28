const Driver=require('../models/driver');
module.exports={
    all(req,res,next){
        const limit=parseInt(req.query.limit) || ''; //parameter
        Driver.find({}).limit(limit)
        .then(driver=>res.status(200).send(driver))
        .catch(next);
    },
    create_driver(req,res,next){
       const driverProps=req.body;
       Driver.create(driverProps)
       .then(driver=>res.status(201).send(driver))
       .catch(next);
    },
    edit(req,res,next){
        const driveId=req.params.id;
        const driverProps=req.body;
        Driver.findByIdAndUpdate({_id:driveId},driverProps)
        .then(()=>Driver.findById({_id:driveId}))
        .then(driver=>res.status(200).send(driver))
        .catch(next);
     },
     delete(req,res,next){
        const driveId=req.params.id;
        Driver.findByIdAndRemove({_id:driveId})
        .then(driver=>res.status(204).send(driver))
        .catch(next);
     },
     details(req,res,next){
        const driveId=req.params.id;
        Driver.findById({_id:driveId})
        .then(driver=>res.status(200).send(driver))
        .catch(next);
     }
}