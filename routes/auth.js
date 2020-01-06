const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

// Redirect to GitHub auth
router.get(
    '/github',
    passport.authenticate('github', {
        session:false,
        scope: ['profile', 'email']
    })
);

// Exchange GitHub auth code to JWT
router.get(
    '/jwt/github', 
    passport.authenticate('github', {
        session: false,
        failureRedirect: '/login' 
    }), 

    (req, res) => { 
        const token = jwt.sign(
            {sub: req.user.id}, 
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_TOKEN_TTL}
        );
        res.send({jwt: token});
    } 
)

router.get('/logout', (req, res) => {
    req.logout();
    res.send();
})

module.exports = router;