const express=require('express');
const router=express.Router();


const SignupTemplatecopy=require('Signupmodel');

router.post("/signup",(request,response)=>
{
    const sam=new SignupTemplatecopy({
    
        name:request.body.name, 
        email:request.body.email,
        contact:request.body.contact,
        dob:request.body.dob,
        course:request.body.course
    })


    sam.save().then(data=>
        {
            response.json(data);
            console.log('Data added successfully');
        }).catch(error=>
            {

                response.json(error)
            })
})



module.exports=router;
