// npm i -g express
// npm i -g body-parser
// npm i -g cookie-parser
// npm i -g multer
// npm i -g express-session
// npm i -g pug
//=======================================================================================================
var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var cookieParser = require("cookie-parser");
app.use(cookieParser());

var multer = require("multer");
app.use(multer().array());

var session = require("express-session");
app.use(session({ secret: "secret", cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true }));

app.set("view engine", "pug");
app.set("views", "./views");

var users = [];
//=======================================================================================================
app.get("/", function (req, res) {
    res.render("home");
});
//=======================================================================================================
app.get("/signup", function (req, res) {
    res.render("signup"); //SIGNUP.PUG
});

app.post("/signup", function (req, res) {
    if (!req.body.id || !req.body.password) {
        res.status(400).render("signup", { message: "INCOMPLETE DETAILS!" });
        // res.status(400).render("show_message", { message: "INVALID DETAILS!" });
    } else {
        var find = users.filter(user => user.id == req.body.id).shift();
        if (find) {
            res.render("signup", { message: "USER ALREADY EXISTS! CHOOSE ANOTHER USER ID!", type: "error" });
        } else {
            var newUser = { id: req.body.id, password: req.body.password };
            users.push(newUser);
            req.session.user = newUser;
            res.redirect("/protected");  //PROTECTED.PUG
        }
    }
});

//=======================================================================================================

app.get("/protected", function (req, res) {
    if (req.session.user) {
        res.render("protected", { id: req.session.user.id });  //PROTECTED.PUG
    } else {
        // res.render("login", { message: "NOT LOGGED IN!" });
        res.redirect("/login");
    }
});
//=======================================================================================================
app.get("/login", function (req, res) {
    res.render("login");  //LOGIN.PUG
});

app.post("/login", function (req, res) {
    if (!req.body.id || !req.body.password) {
        res.status(400).render("login", { message: "PLEASE PROVIDE ID & PASSWORD!" });
    } else {
        var find = users.filter(user => (user.id == req.body.id && user.password == req.body.password)).shift();
        if (find) {
            req.session.user = find;
            res.redirect("/protected");
        } else {
            res.status(400).render("login", { message: "INVALID CREDENTIALS!" });
        }
    }
});
//=======================================================================================================
app.get("/logout", function (req, res, next) {
    if (req.session.user) {
        req.session.destroy(function (err) {
            if (err) return next(err);
            else {
                console.log("USER LOGGED OUT!");
                return res.redirect("/");
            }
        });
    } else {
        console.log("ALREADY LOGGED OUT!");
        res.redirect("/");
    }
});
//=======================================================================================================
app.listen(3000);
