const JokesApi = require("../models/jokes.models")
const Jokes = require("../models/jokes.models")

module.exports.apiTest = (req, res)=> {
    res.json({message: "It is working as expected"})
}

module.exports.allJokes = (req, res)=> {
    JokesApi.find()
    .then(jokeList=> res.json(jokeList))
    .catch(err=>res.json(err))
}

module.exports.oneJoke = (req, res)=> {
    JokesApi.findOne({_id: req.params.id})
    .then(oneJoke=> res.json(oneJoke))
    .catch(err=>res.json(err))
}

module.exports.createJoke = (req, res)=> {
    const newJoke = req.body
    JokesApi.create(newJoke)
    .then(addedJoke => res.json(addedJoke))
    .catch(err=>res.json(err))
}

module.exports.updateJoke = (req, res)=> {
    JokesApi.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedJoke=> res.json(updatedJoke))
        .catch(err=>res.json(err))
}

module.exports.deleteJoke = (req, res)=> {
    JokesApi.deleteOne({_id: req.params.id})
    .then(message=>res.json(message))
    .catch(err=>res.json(err))
}