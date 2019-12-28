const User = require('../database/models/user_model')
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;

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

passport.use(new JwtStrategy(
    {
        secretOrKey: process.env.JWT_SECRET,
        // This will go away when we implement client-side JWT Auth Bearer.
        jwtFromRequest: (req) => {
            if (req && req.cookies) {
                return req.cookies['jwt'];
            }
            return null;
        }
    },
    async (payload, done) => {
        const user = await User.findById(payload.sub).catch(done);
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    }
));