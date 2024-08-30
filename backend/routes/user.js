const express = require("express");
const { User } = require("../db/user");
const { z } = require("zod");
const { Balance } = require("../db/balance");
const { default: userexits } = require("../middlewares/userexists");
const userExists = require("../middlewares/userexists");
const userRouter = express.Router() ;
const jwt = require("jsonwebtoken");
const { JWT_SECRET, authMiddleware } = require("../middlewares/authMiddleware");



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


userRouter.post("/signup",userExists, async (req,res)=>{
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
                res.status(200).json({ message: "User created successfully"})

                
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
                const user = await User.findOne({username : username , password : password})
                if (user){
                    const token = jwt.sign({userId : user._id},JWT_SECRET)
                    res.status(200).send("signed in successfully")
                }
 
                 
             } catch(err) {
                 console.log(err)
             }
     }
  
 
 })


 const updateBody = z.object({
	password: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
})

userRouter.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne(req.body, {
        id: req.userId
    })

    res.json({
        message: "Updated successfully"
    })
})


module.exports = userRouter