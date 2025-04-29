const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    commentedBy: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    likes:{
            type: Number,
            required: false
        },
});

const postSchema = new Schema({
    user_id:{
        type: String,
        required: true,
    },
    post:{
        type: String,
        requried: true
    },
    likes:{
        type: Number,
        required: false
    },
    comments: commentSchema
});

const posts = mongoose.model('posts', postSchema);

module.exports = posts;