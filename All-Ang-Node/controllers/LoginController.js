const routes = require("express").Router();
const User = require("../models/Login");

routes.post("/", (req,res)=> {
    User.create(req.body, (error)=> {
        res.send({success : true});
    })
})

module.exports = routes;