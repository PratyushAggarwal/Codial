module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title: 'profile'
    });
}
module.exports.contact = function(req,res){
    return res.end('<h1><u>contacts</u></h1>');
}