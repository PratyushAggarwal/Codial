const Post = require('../models/post');
const Comment = require('../models/comment');
 
module.exports.create =async function(req,res){
    
    try{
        let post = await Post.findById(req.body.post);
        if(post){
            let comment = await Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            });
            req.flash('success','You created a new comment');
            post.comments.push(comment);
            post.save();
            res.redirect('/');
        }
    }catch(error){
        req.flash('error',error);
        return res.redirect('back');
    }
}

module.exports.destroy =async function(req, res){
    try{
        let comment = await Comment.findById(req.params.id);
        if(comment.user == req.user.id){
            let postid = comment.post;
            comment.remove();
            let post =  Post.findByIdAndUpdate(postid, { $pull: {comments: req.params.id}});
            req.flash('error','this comment is deleted')
            return res.redirect('back');
        }else{
            req.flash('error','You can not delete this post');
            return res.redirect('back');
        }
    }catch(error){
        console.log("error",error);
        return;
    }
    
}