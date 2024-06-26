const mongoose = require("mongoose");

const userFormSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    createdOn : {
        type : Date,
        default : Date.now
    }
})
module.exports = mongoose.model("userForm", userFormSchema)