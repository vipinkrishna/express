//npm i -g express
//npm i -g pug

var express = require("express");
var app = express();

app.set("view engine","pug");
app.set("views","./views");  //dynamic.pug resides in ./views

app.get("/templating", function(req, res){  //localhost:3000/templating
    res.render("dynamic",{user:{name:"VIPIN KRISHNA", url:"http://www.google.com"}});  //dynamic.pug
});

app.listen(3000);

//curl -X GET "localhost:3000/templating"
