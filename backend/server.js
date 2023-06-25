const express = require('express');
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require('cors');

const app = express();

app.use(cookieSession(
  {
    name:"session",
    keys:["abc"],
    maxAge:24 * 60 * 60 * 100,
  }
))

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
  origin: "*",
  method: "GET,POST,PUT,DELETE",
  credentials: true
}))

app.get('/', (req, res) => {
  res.send("You're finally awake.");
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});