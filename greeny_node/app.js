const express = require("express");
const routes = require("./config")
const cors = require("cors");
const upload = require("express-fileupload")

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/assets"));

app.use(upload());
app.use(cors());

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log("Server Running");
})

