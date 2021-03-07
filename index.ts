import express, {Application, urlencoded} from "express";

const app: Application = express(); 
app.use(express.static("./assets"));
app.use(urlencoded({extended:true}));

app.get("/",(req,res)=>{

    var isLocal = (req.connection.localAddress === req.connection.remoteAddress);

    console.log(isLocal);
    res.send("ok");
});

app.listen(1337, ()=>{
    console.log("started on port: 1337");
})
