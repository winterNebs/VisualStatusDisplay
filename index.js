"use strict";
exports.__esModule = true;
var express_1 = require("express");
var path_1 = require("path");
var app = express_1["default"]();
app.use(express_1["default"].static(path_1.join(__dirname, "../assets")));
app.use(express_1.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    var isLocal = (req.connection.localAddress === req.connection.remoteAddress);
    if (isLocal) {
        res.sendFile('user.html', { root: path_1.join(__dirname, "../assets") });
    }
    else {
        res.sendFile('phone.html', { root: path_1.join(__dirname, "../assets") });
    }
});
var status = "";
var room = "";
var reason = "";
app.get("/status", function (req, res) {
    res.json({ status: status, room: room, reason: reason });
});
app.put("/", function (req, res) {
    var isLocal = (req.connection.localAddress === req.connection.remoteAddress);
    if (isLocal) {
        status = req.body.status;
        room = req.body.room;
        reason = req.body.reason;
        res.sendStatus(200);
    }
    else {
        res.sendStatus(401);
    }
});
app.listen(1337, function () {
    console.log("started on port: 1337");
});
