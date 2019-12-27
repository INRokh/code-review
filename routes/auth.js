const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.get(
    '/github',
    passport.authenticate('github', {
        session:false,
        scope: ['profile', 'email']
    })
);

router.get(
    '/github/callback', 
    passport.authenticate('github', {
        session: false,
        failureRedirect: '/login' 
    }),
    (req, res) => { 
        const token = jwt.sign({sub: req.user.id}, process.env.JWT_SECRET);
        // This will go away when client-side JWT Auth Bearer is implemented.
        res.cookie('jwt', token);
        res.redirect('/');
    } 
)

router.get('/logout', (req, res) => {
    // This will go away when client-side JWT Auth Bearer is implemented.
    res.cookie('jwt', null, { maxAge: -1 });

    req.logout();
    res.redirect('/');
})

module.exports = router;