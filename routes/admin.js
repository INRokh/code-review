const router = require('express').Router();
const passport = require('passport');

//current user
router.get('/', passport.authenticate('jwt', {session: false}),
(req, res) => {
    res.send(req.user);
});

module.exports = router;