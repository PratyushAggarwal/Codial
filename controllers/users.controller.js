module.exports.profile = function(req,res){
    return res.end('<h1>user profile</h1>');
}
module.exports.contact = function(req,res){
    return res.end('<h1><u>contacts</u></h1>');
}