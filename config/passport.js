const User = require('../database/models/user_model')
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch(error) {
        done(error);
    }
});

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: '/auth/github/callback'
    },
    async(accessToken, refreshToken, profile, done) => {
        if(profile.id !== ''){
            let user = await User.findOne({ githubId: profile.id })
                .catch(done);
            if(!user){
                user = await User.create({ 
                    username: profile.username, 
                    githubId: profile.id
                }).catch(done);
            } 
            return done(null, user);
        }
        return done(null, false);
    }
));