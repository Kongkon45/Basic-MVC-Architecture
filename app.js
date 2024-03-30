const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json())

// home route 
app.get("/", (req, res)=>{
    res.status(200).json({message : "Server is ready"});
})
// route not found 
app.use((req, res, next)=>{
    res.status(404).json({message : "This url is not found "});
})
// server something broke 
app.use((err, req, res, next)=>{
    res.status(500).json({message : "Server something broke"})
})

module.exports = app;