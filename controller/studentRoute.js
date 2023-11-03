const express = require("express");
const studentSchema = require("../model/studentSchema");
const studentRoute = express.Router();
const mongoose = require("mongoose");

studentRoute.get("/",(req,res)=>{
    studentSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
studentRoute.post("/register",(req,res)=>{
    studentSchema.create(req.body, (err,data) => {
         const {email, password } = req.body;
  
    try{
        const oldUser = await User.findOne({email});
        if(oldUser){
           return res.send({error:"User Exists"});
        }
        await User.create({
            email,
            password,
        });
        res.send({status:"ok"});
    }catch(error){
        res.send({status:"error"});
    }
    })
})




module.exports = studentRoute;
