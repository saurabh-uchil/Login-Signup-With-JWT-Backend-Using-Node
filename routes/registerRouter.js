const express = require('express');
const users = require('../model/UserSchema');
const sendEmail = require('../helper/nodemailer');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.get("/", async (req, res)=>{
    try{
        const response = await users.find();
        res.json(response);
    }catch(error){
        console.log("Find error "+error);
    }
});

//Register a new user
router.post("/", async (req,res)=>{
    try{
        //check if user already exists
        const user = await users.find({email:req.body.email});
        if(user.length > 0){
            res.status(409).json({message:"User already exists", user:user});
        }
        //Save the values if user does not exist
        else{
            
            //encrypting the password
            const salt = bcrypt.genSaltSync(10);
            const encryptedPassword = bcrypt.hashSync(req.body.password, salt);

            //Save user into db
            const response = await users.insertOne({...req.body, password: encryptedPassword, hasVerified:false});
            res.status(200).json({message:"Registered Successfully", action:"Please verify your account using the link sent to the email", insert_id: response._id});
            sendEmail(req.body.email, response._id);
        }
    }catch(error){
        res.status(500).json({message:"Registeration Failed", error: error.message});
    }

});

module.exports = router;