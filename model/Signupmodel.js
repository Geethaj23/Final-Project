const mongoose=require('mongoose');


const signupTemplate=new mongoose.Schema(
    {
     
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        contact:
        {
            type:String,
            required:true
        },
        dob:{
            type:String,
            required:true
        },
        course:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            default:Date.now
        }

    })


    module.exports=mongoose.model('sampletable',signupTemplate)