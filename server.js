const express=require('express');
const app=express();
const mongoose = require('mongoose');
const routerurl= require('/routes')
const cors=require('cors');

app.use(express.json());
app.use(cors())
app.use("/app",routerurl);

if(mongoose.connect('mongodb+srv://Geetha:2812KatDha@cluster0.i9wl6k3.mongodb.net/Final-db?retryWrites=true&w=majority&appName=Cluster0'))
    {
        console.log("Database connected");
    }



    app.listen(4005,()=>
{
    console.log('server is up and run');
})
