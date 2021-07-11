const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // include the ids of all comments as array in this post schema itself
    comments:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
    }] 
},{
    timestamps: true
});

const Post = mongoose.model('Post',PostSchema);
module.exports = Post;