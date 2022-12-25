require("../config/database");
const mongoose = require("mongoose");

const User = mongoose.Schema({
    fname  : String,
    lname  : String,
    email  : String,
    password  : String,
    re_password  : String,
    terms: String,
    day: String,
    month: String,
    year: String,
    gender: String,
    contact: Number,
    codes: String,
})

module.exports = mongoose.model("user", User)