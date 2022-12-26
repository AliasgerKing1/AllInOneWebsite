const mongoose = require("mongoose");

const Buyer = mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    contact: String,
    password: String,
    conf_password: String,
})

module.exports = mongoose.model("buyer", Buyer);