const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    email: {type: String, unique: true},
    password: String,
},{
    collection:"UserInfo"
})

module.exports = mongoose.model("UserInfo",studentSchema);
