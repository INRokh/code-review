const router = require('express').Router();
const passport = require('passport');

router.get(
    '/auth/github',
    passport.authenticate('github', { scope: ['profile', 'email'] })
);

router.get(
    '/auth/github/callback', 
    passport.authenticate('github', { failureRedirect: '/login' }),
    (req, res) => { res.redirect('/') } 
)

module.exports = router;