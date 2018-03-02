//npm i -g express
//npm i -g cookie-parser

var express = require("express");
var app = express();

var cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/", function (req, res) {
    // res.cookie("name", "express", { expire: 60000 + Date.now() }).send("COOKIE SET!");
    res.cookie("name", "express", { maxAge: 60000 }).send("COOKIE SET!");
    // console.log(req.cookies);
});


app.get("/clear", function (req, res) {
    res.clearCookie("name").send("COOKIE CLEARED!");
});

app.listen(3000);
