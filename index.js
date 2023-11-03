const express = require("express");
const mongoose = require("mongoose");
const studentRoute = require("./controller/studentRoute");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

mongoose.set("strictQuery",true); //Deprection Warning //To supress warning
mongoose.connect(mongodb+srv://ashrafshaik4444:Reeha2006@cluster1.2rwhqto.mongodb.net/?retryWrites=true&w=majority");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occurred"));
/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/studentRoute",studentRoute);
*/
app.post("/register",async(req,res)=>{
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
app.listen(4000,()=>{
    console.log("Server started at 4000");
})