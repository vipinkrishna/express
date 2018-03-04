//npm i -g express
//npm i -g cookie-parser

var express = require("express");
var app = express();

var cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/", function (req, res) {
    // res.cookie("name", "express", { expire: 60000 + Date.now() }).send("COOKIE SET!");
    if (req.cookies.localhost) {
        res.send("WELCOME COOKIE!");
    } else {
        res.cookie("localhost", "3000", { maxAge: 180000 }).send("COOKIE SET!");
    }
});


app.get("/clear", function (req, res) {
    res.clearCookie("localhost").send("COOKIE CLEARED!");
});

app.listen(3000);
