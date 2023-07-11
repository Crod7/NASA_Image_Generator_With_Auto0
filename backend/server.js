// Dependencies
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const cors = require('cors');
const mongoose = require('mongoose')

// Env Import
require('dotenv').config();

// Route Imports
const authRoute = require('./routes/auth');
const userRoute = require('./routes/userRoute');
const nasaRoute = require('./routes/nasaRoute');

// Config Imports
require('./config/passport');
//const passportSetup = require('./config/passport');
const corsOptions = require('./config/corsOptions');


// Init
const app = express();



// Middleware
app.use(express.json());
/*app.use(cookieSession(
  {
    name:"session",
    keys:["abc"],
    maxAge:24 * 60 * 60 * 100,
  },
));*/

// Set up cookie parser and sessions
app.use(cookieParser());
app.use(session({
  secret: 'abc',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));



// List of routes
app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/nasa', nasaRoute);

// Add the Google Authentication routes
/*
app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // This function is called after a successful Google Authentication
    // You can add your own logic here, such as redirecting the user or returning a JSON response
    res.redirect(process.env.CLIENT_URL); // Redirect to the homepage
  }
);
*/


// Server listen & Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () =>{
            console.log('listening on port 5000');
        })
    })
    .catch((error) => {
        console.log(error);
    })