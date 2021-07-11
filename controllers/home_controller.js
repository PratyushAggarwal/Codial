const post = require('../models/post');
const User = require('../models/user');
module.exports.home=async function(req,res){

    try{
        let posts =await post.find({})
        .sort('-createdAt')
        .populate("user")
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            }
        })

        let users =await User.find({});
        return res.render('home',{
            title: "Codeial | home",
            posts: posts,
            all_users: users
        });
    }catch(error){
        console.log("error",error);
        return;
    }
    
    

    
}
module.exports.createacc = function(req,res){
    return res.end('<h1>CREATE AN ACCOUNt</h1>')
}

// module.exports.actionName = function(req,res){}