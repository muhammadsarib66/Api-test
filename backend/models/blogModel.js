const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true,
        min: [3, "title must be 3 characters long"],
        max: [15, "title must be 15 characters long"]
    },
    content: {
        type: String,
        required: true,
        min: [5, "userDescription must be 30 characters long"]
        
    },
    categories : {
        type: String,
        required: true,
    },
    titleImage: [String],
})

module.exports = mongoose.model("Blog", BlogSchema)