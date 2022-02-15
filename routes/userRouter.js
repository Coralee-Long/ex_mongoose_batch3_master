const userRouter = require('express').Router()
const User = require('../models/user')

userRouter.get('/', (req, res) => {
    User
    .find()
    .then(user => res.json(user))
    .catch(err => console.log(err))
})

userRouter.post('/', (req, res) => {
    User
    .create(req.body)
    .then(newUser => res.json(newUser))
    .catch(err => console.log(err))
})

module.exports = userRouter