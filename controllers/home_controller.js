module.exports.home= function(req,res){
    console.log(req.cookies);
    res.cookie('user_id',25);
    return res.render('home',{
        title: "home"
    });
}
module.exports.createacc = function(req,res){
    return res.end('<h1>CREATE AN ACCOUNt</h1>')
}

// module.exports.actionName = function(req,res){}