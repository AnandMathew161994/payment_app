const { User } = require("../db/user")


function userExists(req,res,next){
    const username = req.body.username
    User.findOne({username : username}). then((value)=>{
        if (!value) {
            next()
        } else {
            res.status(403).send("User exists")
        }

    })
    
}

module.exports = userExists