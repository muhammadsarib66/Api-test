const mongoose = require('mongoose');

const HeroInfoSchema = new mongoose.Schema({
    
    userName: {
        type: String,
        required: true
        // min: [3, "username must be 3 characters long"],
        // max: [15, "username must be 15 characters long"]
    },
    userDescription : {
        type: String,
        required: true
        // min: [5, "userDescription must be 30 characters long"]
    
    }
})

module.exports = mongoose.model("HeroInfo", HeroInfoSchema)