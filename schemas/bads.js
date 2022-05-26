const mongoose = require("mongoose");

const BadSchema = new mongoose.Schema({

    
    title: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },
    
    
    uploadate: {
        type: Date
    },
    
    password: {
        type: Number
    },

    content: {
        type: String
    }, 

 });

module.exports = mongoose.model("Bads", BadSchema);