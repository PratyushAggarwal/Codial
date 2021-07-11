const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports.create =async function(req, res){
    try{
        let post = await Post.create({
            content: req.body.content,
            user: req.user._id
        });

        if(req.xhr){
            return res.status(200).json({
                data: {
                    post: post
                },
                message: "Post Created!"
            });
        }

        req.flash('success','Post created!');
        return res.redirect('back');
    }catch(error){
        req.flash('error',error);
        return;
    }
}

module.exports.destroy =async function(req, res){
    try{
        let post = await Post.findById(req.params.id);
        // .id means convering the object into string
        if(post.user == req.user.id){
            post.remove();
            await Comment.deleteMany({post: req.params.id});

            if(req.xhr){
                return res.status(200).json({
                    data: {
                        post_id: req.params.id
                    },
                    message: "post deleted"
                });
            }

            req.flash('success','Post and associated comments deleted');
            return res.redirect('back');
        }else{
            req.flash('success','You can not delete this post');
            return res.redirect('back');
        }
    }catch(error){
        req.flash('error',error);
        return res.redirect('back');
    }


    
}