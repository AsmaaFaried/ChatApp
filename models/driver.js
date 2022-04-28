const mongoose=require('mongoose');
const schema = mongoose.Schema;
const DriverSchema=new schema({
    fisrtName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    }
    ,
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});

const Driver=mongoose.model('driver',DriverSchema);
module.exports=Driver;