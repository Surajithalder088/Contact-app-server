import express from "express";
import mongoose from "mongoose";
import User from "./model/contact.js"
import cors from "cors";

const app=express();
app.use(express.json())

app.use(cors())
mongoose.connect("mongodb+srv://surajithalder088:5QeHdPhMee6TJkaq@cluster0.gilfff5.mongodb.net/",
{useNewUrlParser:true,
useUnifiedTopology:true})
.then(
   
    ()=>{console.log("database connected")})
.catch((e)=>console.log(e.messege))

app.get("/api/",async(req,res)=>{
   
    try{    const alldata=await User.find({})
        res.status(200).json(alldata)

}catch(err){res.status(400).json(err)
}})
    
    app.put("/api/:id",async(req,res)=>{
        try{  const {name,email,about}=req.body
        const id=req.params.id;
             const user=await User.findByIdAndUpdate(id,{name,email,about},{new:true})
        console.log(user)
        res.status(200).json(user)
}catch(err){res.status(400).json(err)
}})

app.delete("/api/:id",async(req,res)=>{
    try{  
    const id=req.params.id;
         const user=await User.findByIdAndDelete(id)
    console.log(user)
    if(!user) return res.status(404).json("user not find")
    
    res.status(200).json(" user deleted ")
}catch(err){res.status(400).json(err)
}})

app.post("/api/post",async(req,res)=>{
   try{ const {name,email,about}=req.body;
    const newdata= await User.create({name,email,about}) ;
    res.status(201).json(newdata)
}catch(err){res.status(400).json({messege:messege.err})}}
)

 app.listen(6000,()=>{console.log("server connected");})