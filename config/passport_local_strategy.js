const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

//authentication using passport
passport.use(new LocalStrategy({
        usernameField: 'email',
        passReqToCallback: true
    },
    function(req,email,password,done){
        //find a user and establish the identity
        User.findOne({email: email},function(error,user){
            if(error){
                req.flash('error',error);
                return done(error);
            }
            if(!user || user.password != password){
                req.flash('error',"Invalid Username/Password");
                return done(null, false);
            }
            return done(null,user);
        });
    }
));

//serializing the user to decide which key is used as cookie
passport.serializeUser(function(user,done){
    done(null,user._id);
});


//deserializing the user from the key in cookie
passport.deserializeUser(function(id,done){
    User.findById(id,function(error,user){
        if(error){
            console.log('error in finding error');
            return done(error);
        }
        return done(null,user);
    });
});

//check user is authenticated
passport.checkAuthentication = function(req,res,next){
    //if the user is signed then pass on the req to the next funtion(controllers action)
    if(req.isAuthenticated()){
        return next();
    }
    //if user is not signed in 
    return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        //req.user contain the current signed in user from the session cookie and we are just send it to the locals for view
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;