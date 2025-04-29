const express = require('express');
const posts = require('../model/PostsSchema');
const router = express.Router();

router.get("/", async (req,res)=>{
    try{
        const post = {
            user_id: '680b9dd93c86b38b5fc2ed5c',
            post: 'Hey This is my first post...',
            likes: 25,
            comments: {
                commentedBy:{
                    user_id: '680b9dd93c86b38b5fc2ed5c',
                    username: 'Kaqyfocu',
                    email: 'kaqyfocu@asciibinder.net',
                    password: '$2b$10$wAQdOOig0J3jOPW3BvYKneCpLp7/0nbMPuz/iYconncqjZriVrcui',
                    hasVerified: true
                },
                comment: 'Congrats on your first post..',
                likes: 35
            }
        }
        const response = await posts.insertOne(post);
        res.status(201).json({success: true, response:response});
    }catch(err){
        console.log(err);
    }
});

module.exports = router;