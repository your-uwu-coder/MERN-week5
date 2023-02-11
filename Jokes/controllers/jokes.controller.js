const Jokes = require('../models/jokes.model')

module.exports = {

    allJokes: (request, response) => {
        Jokes.find({})
        .then((allJokes) => {
            response.json(allJokes)
        })
        .catch((err) => {
            response.status(500).json(err)
        })
    },

    oneJoke: (request, response) => {
        Jokes.findOne({ _id: request.params.id })
        .then((oneJoke) => {
            response.json(oneJoke)
        })
        .catch((err) => {
            response.status(500).json(err)
        })
    },

    newJoke: (request, response) => {
        Jokes.create(request.body)
        .then((newJoke) => {
            response.json(newJoke)
        })
        .catch((err) => {
            response.status(500).json(err)
        })
    },

    updateJoke: (request, response) => {
        Jokes.findOneAndUpdate( { _id: request.params.id } , request.body, { new: true, runValidators: true } )
        .then(updatedJoke => {
            response.json(updatedJoke)
        })
        .catch((err) => {
            response.status(500).json(err)
        })
    },

    deleteJoke: (request, response) => {
        Jokes.deleteOne({ _id: request.params.id })
        .then((response) => {
            response.json(response)
        })
        .catch((err) => {
            response.status(500).json(err)
        })
        
    }

}