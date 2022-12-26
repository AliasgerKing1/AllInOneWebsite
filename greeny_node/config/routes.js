const routes = require("express").Router();

routes.use("/api/buyer", require("../controllers/BuyerController"));

module.exports = routes;