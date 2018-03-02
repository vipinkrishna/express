//npm i -g express
//npm i -g pug

var express = require("express");
var app = express();

app.set("view engine","pug");
app.set("views","./");  //first.pug resides in ./

app.get("/templating", function(req, res){  //localhost:3000/templating
    res.render("first");  //first.pug
});

app.listen(3000);

//curl -X GET "localhost:3000/templating"
