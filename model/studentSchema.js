const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    email: {type: String, unique: true},
    password: String,
},{
    collection:"Registration"
})

module.exports = mongoose.model("Registration",studentSchema);
