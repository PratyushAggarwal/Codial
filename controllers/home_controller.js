const post = require('../models/post');
module.exports.home= function(req,res){
    // console.log(req.cookies);
    // res.cookie('user_id',25);

    // post.find({},function(error,post){
    //     console.log(post);
    //     return res.render('home',{
    //         title: "Codeial home",
    //         post_list: post
    //     });
    // });

    
    //populate the user of each post
    post.find({}).populate("user").exec(function(error,posts){
        return res.render('home',{
            title: "Codeial | home",
            posts: posts
        });
    });
    
}
module.exports.createacc = function(req,res){
    return res.end('<h1>CREATE AN ACCOUNt</h1>')
}

// module.exports.actionName = function(req,res){}