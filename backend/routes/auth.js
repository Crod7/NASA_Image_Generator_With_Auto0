// Dependencies
const passport = require('passport');
const router = require('express').Router();



// Login Logout Routes
router.get('/logout', (req,res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL);
});

router.get('/login/failed', (req, res) => {
    res.status(401).json({
        success: false,
        message: 'failure, could not authenticate the user with google.'
    })
});

router.get('/login/success', (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: 'Success',
            user: req.user,
        })
    }
});



// Google Auth Routes
router.get("/google", passport.authenticate("google", { scope: ['profile', 'email'] }));

router.get(
    '/google/callback',
    passport.authenticate('google', {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: '/login/failed'
}));



module.exports = router;