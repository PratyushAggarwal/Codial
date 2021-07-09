const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },   
},{
    timestamps: true
}
);

const Post = mongoose.model('Post',PostSchema);
module.exports = Post;