/*
Imports
*/
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const UserModel = require('../models/user.model');
//

/*
Service definition
*/
// Extract token from cookie
const cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies) token = req.cookies['hetic-blog'];
    return token;
};

// JWT authentication
const authJwt = (passport) => {
    // #JWT Options for passport
    const opts = {
        jwtFromRequest: cookieExtractor,
        secretOrKey: process.env.JWT_SECRET,
    };
    // console.log(opts)
    // #JWT strategy
    passport.use( new JwtStrategy( opts, ( jwt_payload, done ) => {
        // Try to connect user
        UserModel.findOne( {_id: jwt_payload._id }, (err, user) => {
            if(err) done(err, false);
            if(user) {
                done(null, user)
            }
            else done(null, false)
        })
    }));
};
//

/*
Export service
*/
module.exports = {
    setAuthentication: (passport) => {
        authJwt(passport);
    }
};
//