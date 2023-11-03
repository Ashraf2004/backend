const express = require("express");
const studentSchema = require("../model/studentSchema");
const studentRoute = express.Router();
const mongoose = require("mongoose");

studentRoute.post("/register",async(req,res)=>{
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
});

module.exports = studentRoute;
