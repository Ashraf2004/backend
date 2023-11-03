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
studentRoute.post("/create-student",(req,res)=>{
    studentSchema.create(req.body, (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})





module.exports = studentRoute;
