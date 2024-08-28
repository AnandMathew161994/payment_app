const express = require("express")
const userRouter = express.Router() ;

userRouter.get("/",(req,res)=>{
    res.send("abc")
})


module.exports = userRouter