import express, {Application, urlencoded} from "express";
import {join} from "path";

const app: Application = express(); 
app.use(express.static(join(__dirname,"../assets")));
app.use(urlencoded({extended:true}));

app.get("/",(req,res)=>{

    var isLocal = (req.connection.localAddress === req.connection.remoteAddress);

    console.log(isLocal);
    res.sendFile('user.html', {root:join(__dirname, "../assets")})
});

app.listen(1337, ()=>{
    console.log("started on port: 1337");
})
