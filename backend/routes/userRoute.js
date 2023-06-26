const User = require('../models/userModel');
const express = require('express');

const router = express.Router();


// Controller functions
const { signupUser, 
    loginUser,
    getUserData
    } = require('../controllers/userController');



// Login route
router.post('/login', loginUser);



// Signup route
router.post('/signup', signupUser);



router.get('/:email', getUserData)



module.exports = router;