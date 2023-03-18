const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "jokes is required"],
        minLength: [10, "jokes must be at least 10 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "punchline is required "],
        minLength: [3, "punchline must be at least 3 characters long"]
    }
},{timestamps:true})

const JokesApi = mongoose.model('joke', JokeSchema)
module.exports = JokesApi