const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    password: String,
},{
    collection:"registration"
})

module.exports = mongoose.model("registration",studentSchema);
