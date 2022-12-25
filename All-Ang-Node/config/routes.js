const routes = require("express").Router();

routes.use("/", require("../controllers/LoginController"));

module.exports = routes;