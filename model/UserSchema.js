const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    hasVerified:{
        type: Boolean,
        required: true
    }
}, {timestamps:true});

const users = mongoose.model('user', userSchema);

module.exports = users;