// Dependencies
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');

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
const corsOptions = require('./config/corsOptions');


// Init
const app = express();



// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: 'abc',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI
  })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));



// List of routes
//app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/nasa', nasaRoute);

// Login Logout Routes
app.get('/auth/logout', (req,res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
});

app.get('/auth/login/failed', (req, res) => {
  res.status(401).json({
      success: false,
      message: 'failure, could not authenticate the user with google.'
  })
});

app.get('/auth/login/success', (req, res) => {
  if (req.user) {
      res.status(200).json({
          success: true,
          message: 'Success',
          user: req.user,
      })
  }
});



// Google Auth Routes
app.get("/auth/google", passport.authenticate("google", { scope: ['profile', 'email'] }));

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
  successRedirect: process.env.CLIENT_URL,
  failureRedirect: '/login/failed'
}));



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