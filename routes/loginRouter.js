
const users = require('../model/UserSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const express = require ('express');
const router = express.Router();

router.get("/", (req,res)=>{
    res.send("Welcome to login router");
});


//login user
router.post("/", async (req,res)=>{
    try{
        console.log(req.body);
        const user = await users.find({username:req.body.username});
        console.log(user);
        if(user.length === 0){
            res.status(404).json({message:"User not found", user:user});
        }
        if(user.length > 0){
            const hashedPassword = user[0].password;
           
            if(!user[0].hasVerified){
                res.status(403).json({ message: "Email not verified. Please check your inbox." });
            }
            else if(!bcrypt.compareSync(req.body.password, hashedPassword)){
                res.status(401).json({message:"Incorrect Password"});
            }
            else{
                const token = jwt.sign({username: user[0].username}, process.env.JWT_SECRET, {expiresIn: '1h'});
                //console.log("Token: "+token);

                const options = {
                    httpOnly: false,
                    sameSite: 'strict',
                    secure: false,
                    maxAge: 3600000 // 1 hour
                }
               
                res.status(200).cookie("myToken", token, options).json({message:"Login Successful", token:token});
            }
        }
    }catch(error){
        console.log(error.message);
    }
})


module.exports = router;