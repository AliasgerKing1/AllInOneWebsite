const routes = require("express").Router();
const Buyer = require("../models/Buyer");

routes.post("/", (req, res)=> {
    delete req.body.re_password;
    req.body.password = sha1(req.body.password);
    Buyer.create(req.body, (error)=> {
        res.send({success : true});
    })
        })
routes.post("/loginauth", (req, res)=> {
    let email = req.body.email;
    let password = sha1(req.body.password);
    Buyer.find({email : email}, (error, result)=> {
        if(result.length == 1) {
            if(result[0].password == password) {
                let obj = {id : result[0]._id, email : result[0].email};
                let token = jwt.sign(obj , "Aliasger web");
                res.send({success : true, token : token});
            }else {
                res.send({success : false, errType : 2});
            }
        }else {
            res.send({success : false, errType : 1});
        }
    })
})

routes.get("/", (req,res)=> {
    Buyer.find({}, (error,result)=> {
        res.send(result);
    })
})

routes.get("/:id", (req,res)=> {
    let id = req.params.id;
    Buyer.find({_id : id}, (error,result)=> {
        res.send(result[0]);
    })
})
module.exports = routes;