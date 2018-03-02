//npm i -g express

var express = require("express");
var app = express();
//================================GET====================================
app.get("/", function (req, res, next) {  //ROUTE HANDLER
    res.send("GET /");
    console.log("GET /");
    next();
});

app.get("/lolo", function (req, res, next) {  //ROUTE HANDLER
    res.send("GET /lolo");
    console.log("GET /lolo");
    next();
});

app.get("/poko", function (req, res, next) {  //ROUTE HANDLER
    res.send("GET /poko");
    console.log("GET /poko");
    next();
});

//================================USE===================================
app.use("/", function (req, res, next) {  //
    console.log("USE /");
    next();
});

app.use("/lolo", function (req, res, next) {  //MIDDLEWARE
    console.log("USE /lolo");
    next();
});

app.use("/poko", function (req, res, next) {  //MIDDLEWARE
    console.log("USE /poko");
    next();
});

//===============================OTHERS===================================
app.use(function (req, res, next) {  // 
    console.log("USE @@@");
    next();
});

app.use(function (req, res, next) {  // 
    console.log("USE ###");
    next();
});
//====================================================================
app.listen(3000);


//curl -X GET "localhost:3000"