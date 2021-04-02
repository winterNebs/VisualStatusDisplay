import bodyParser from "body-parser";
import express, {Application, urlencoded} from "express";
import {join} from "path";

const app: Application = express(); 
app.use(express.static(join(__dirname,"../assets")));
app.use(bodyParser.json());
app.use(urlencoded({extended:true}));

app.get("/",(req,res)=>{

    var isLocal = (req.connection.localAddress === req.connection.remoteAddress);
    
    if (isLocal) {
        res.sendFile('user.html', {root:join(__dirname, "../assets")});
    } 
    else {
        res.sendFile('phone.html', {root:join(__dirname, "../assets")});
    }

});

let status: string = "";
let room: string = "";
let reason: string = "";
app.get("/status", (req,res)=>{
    res.json({status:status,room:room,reason:reason});
});

app.put("/", (req,res)=>{
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
var localIpV4Address = require("local-ipv4-address");


localIpV4Address().then(function(ipAddress:any){
     app.listen(1337, ()=>{
        console.log("started on: " +ipAddress+":1337");
    })
});
