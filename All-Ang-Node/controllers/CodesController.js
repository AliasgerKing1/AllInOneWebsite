const routes = require("express").Router();
const Codes = require("../models/Codes");

routes.post("/", (req,res)=> {
    User.find({}, (error, result)=> {
        res.send(result);
    })
})

module.exports = routes;