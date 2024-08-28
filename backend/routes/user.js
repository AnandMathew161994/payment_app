const express = require("express");
const { User } = require("../db/user");
const { z } = require("zod");
const { Balance } = require("../db/balance");
const { default: userexits } = require("../middlewares/userexists");
const userExists = require("../middlewares/userexists");
const userRouter = express.Router() ;
 


const userZod= z.object(
  {
    username : z.string().min(3),
    password :z.string().min(5), 
    firstName : z.string(), 
    lastName : z.string(),
    mobile :z.string()
  }
)

const usersigninZod= z.object(
    {
      username : z.string().min(3),
      password :z.string().min(5)
    }
  )


userRouter.put("/signup",userExists, async (req,res)=>{
   const userValid = userZod.safeParse(req.body)
    if (!userValid.success){
        res.send(userValid.error.issues[0].message);
        
    }
    else {
    
            try {
                const {username,password,firstName,lastName,mobile} = userValid.data
                let k = await User.create({ username :username , password : password ,firstName :firstName,lastName : lastName ,mobile:mobile})
                let userId = k._id
                let newaccount = await Balance.create({
                    userId,
                    balance: 1 + Math.random() * 10000
                })
                res.status(200).send(`Welcome ${k.username}. A new account [id = ${newaccount._id}] has been created `)

                
            } catch(err) {
                res.send(err.errorResponse.errmsg)
            }
    }
 

})



userRouter.get("/signin", async (req,res)=>{
    const userValid = usersigninZod.safeParse(req.body)
     if (!userValid.success){
         res.send(userValid.error.issues[0].message);
         
     }
     else {
     
             try {
                let {username , password} = req.body
                User.findOne({username : username , password : password}).then(
                    res.send("success"))
 
                 
             } catch(err) {
                 console.log(err)
             }
     }
  
 
 })


module.exports = userRouter