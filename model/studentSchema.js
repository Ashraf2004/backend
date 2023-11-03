const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    password: String,
},{
    collection:"register"
})

module.exports = mongoose.model("register",studentSchema);
