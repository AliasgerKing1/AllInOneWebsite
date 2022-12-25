const express = require("express");
const cors = require("cors");
const upload = require("express-fileupload");
const routes = require("./config/routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/assets"))

app.use(upload());
app.use(cors());

app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log("Server Running");
})