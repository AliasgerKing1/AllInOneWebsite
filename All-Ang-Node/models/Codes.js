require("../config/database");
const mogoose = require("mongoose");

const Codes = mogoose.Schema({
    name : String,
    dial_code : String,
    code : String,
})

module.exports = mongoose.model("code", Codes)