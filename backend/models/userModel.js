const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');



const Schema = mongoose.Schema;



// Base Schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});



// Signup method
userSchema.statics.signup = async function( name, email, password ) {
    // The if statments check to make sure the user input is valid.
    if (!email || !password || !name){
        throw Error('All fields must be filled.')
    }
    if (!validator.isEmail(email)){
        throw Error('Email is not valid.')
    }
    if (!validator.isStrongPassword(password)){
        throw Error('Password not strong enough.')
    }
    // Checks to see if the email already exists. If it does, it throws an error.
    const exists = await this.findOne({email})
    if (exists){
        throw Error("Email already in use.")
    }
    // This will generate a salt and add it to the end of a password. Then the password gets hashed.
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    // Will create the user and return it to the database.
    const user = await this.create({ name, email, password: hash })
    return user
};



// Login method
userSchema.statics.login = async function( email, password ){
    // Checks to make sure the input entered by the end user is valid and will match a user
    // already inside the database with correct information.
    if (!email || !password){
        throw Error('All fields must be filled.')
    }
    const user = await this.findOne({ email })
    if (!user){
        throw Error("No user was found with this email.")
    }
    // Compares the entered password to the password of a matching email.
    const match = await bcrypt.compare(password, user.password)
    if (!match){
        throw Error('Incorrect password')
    }
    // Return the user if the login process is successful.
    return user
}

module.exports = mongoose.model('User', userSchema)
