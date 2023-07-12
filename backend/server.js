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
app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/nasa', nasaRoute);


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