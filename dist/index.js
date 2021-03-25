"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const path_1 = require("path");
const app = express_1.default();
app.use(express_1.default.static(path_1.join(__dirname, "../assets")));
app.use(express_1.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    var isLocal = (req.connection.localAddress === req.connection.remoteAddress);
    console.log(isLocal);
    res.sendFile('user.html', { root: path_1.join(__dirname, "../assets") });
});
app.get("/phone", (req,res) => {
    var isLocal = (req.connection.localAddress === req.connection.remoteAddress);
    console.log(isLocal);
    res.sendFile('phone.html', { root: path_1.join(__dirname, "../assets") });
});
app.post("/phone", (req,res) => {
    res.send("");
})

app.listen(1337, () => {
    console.log("started on port: 1337");
});
