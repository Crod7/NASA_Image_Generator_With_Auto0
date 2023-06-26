const User = require('../models/userModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')


// CHECK ROUTE LATER MIGHT NOT BE NEEDED
const getUserData = async (req, res) => {
    const user_email = req.email
    const users = await User.find({ user_email }).sort({createdAt: -1})
    res.status(200).json(users)
}


// JsonWebToken creation
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn: '7d'})
}



// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}



// Signup user
const signupUser = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const user = await User.signup(name, email, password)
        const token = createToken(user._id)
        res.status(200).json({name, email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}



module.exports = { signupUser, 
    loginUser, 
    getUserData}