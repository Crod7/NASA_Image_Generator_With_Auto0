// Dependencies
require('dotenv').config();
const express = require('express');
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require('cors');
// Route Imports
const authRoute = require('./routes/auth');
const userRoute = require('./routes/userRoute');
// Config Imports
const passportSetup = require('./config/passport');
const corsOptions = require('./config/corsOptions');



const app = express();



// Middleware
app.use(cookieSession(
  {
    name:"session",
    keys:["abc"],
    maxAge:24 * 60 * 60 * 100,
  },
));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));



// List of routes
app.use('/auth', authRoute);
app.use('/user', userRoute);




// Server listen
app.listen(process.env.PORT, () => {
  console.log('Server is running on port 5000');
});