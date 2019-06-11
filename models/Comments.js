// Dependencies
const mongoose = require("mongoose");

// Create Scherma
const Schema = mongoose.Schema;
const CommentsSchema = new Schema({
    name: {
        type: String,
    },
    body: {
        type: String,
        required: true
    }
})

const Comment = mongoose.model("Comments", CommentsSchema);

module.exports = Comment;