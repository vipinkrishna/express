//npm i -g express

var express = require("express");
var app = express();

app.use(express.static('public'));
app.use("/static", express.static('images'));

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function (req, res) {
    res.render("template");  //template.pug
});

app.listen(3000);
