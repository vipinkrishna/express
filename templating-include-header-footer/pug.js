//npm i -g express
//npm i -g pug

var express = require("express");
var app = express();

app.set("view engine","pug");
app.set("views","./views");  //content.pug resides in ./views

app.get("/components", function(req, res){  //localhost:3000/components
    res.render("content",{user:{name:"VIPIN KRISHNA", url:"http://www.google.com"}});  //content.pug
});

app.listen(3000);

//curl -X GET "localhost:3000/components"
