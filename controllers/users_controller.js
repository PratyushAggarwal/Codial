const User = require('../models/user');

module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title: 'profile'
    });
}
module.exports.contact = function(req,res){
    return res.end('<h1><u>contacts</u></h1>');
}

//render the sign up page
module.exports.SignUp = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_up',{
        title: "codeial | signUp"
    })
}
// render the sign in page
module.exports.SignIn = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_in',{
        title: "codeial | signIn"
    })
}

//get the sign up data
module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email}, function(error,user){
        if(error){
            console.log('error in finding user in sign up');
            return;
        }
        if(!user){
            User.create(req.body, function(error,user){
                if(error){
                    console.log('error in creating  a user');
                    return;
                }
                return res.redirect('sign-in');
            });
        }else{
            return res.redirect('back');
        }
    });
}
//sign in and create a session for user
module.exports.create_sessions = function(req,res){
    return res.redirect('/');   
}

module.exports.destroy_session = function(req,res){
    req.logout();
    return res.redirect('/');
}