//npm i -g express
//npm i -g express-session


var express = require("express");
var app = express();

// var cookieParser = require("cookie-parser");
// app.use(cookieParser());

var session = require("express-session");
app.use(session({ secret: "very secret", cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true }));

app.get("/", function (req, res) {
    if (req.session.views) {
        req.session.views++;
        // res.setHeader('Content-Type', 'text/html');
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8', 'X-Powered-By': "RENI" });
        res.write(`<pre>VIEWS: ${req.session.views}</pre>`);
        res.end(`<pre>EXPIRES IN: ${req.session.cookie.maxAge / 1000} SECONDS</pre>`);
    } else {
        req.session.views = 1;
        res.send("<pre>Welcome for the first time!</pre>");
    }
});

app.listen(3000);
