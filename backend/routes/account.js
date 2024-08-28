const express = require("express")
const accountRouter = express.Router() ;

accountRouter.get("/",(req,res)=>{
    res.send("abc")
})


module.exports = accountRouter