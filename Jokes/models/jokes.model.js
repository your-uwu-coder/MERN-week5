const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema ({

    setup: {
        type: String
    },

    punchLine: {
        type: String ,
        required: [true, 'Punchline is required']
    }

}, {timestamps:true} )

const Jokes = mongoose.model('jokes', JokeSchema)

module.exports = Jokes; 