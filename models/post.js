const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    content: {
        type: string,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },   
},{
    timestamps: true
}
);

const Post = mongoose.model('Post',PostSchema);
module.exports = Post;