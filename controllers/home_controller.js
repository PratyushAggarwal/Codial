module.exports.home= function(req,res){
    return res.end('<h1>express is up for codial</h1>');
}
module.exports.createacc = function(req,res){
    return res.end('<h1>CREATE AN ACCOUNt</h1>')
}
// module.exports.actionName = function(req,res){}