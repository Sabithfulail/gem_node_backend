const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    imageGem: { type: String},
    imageCertificate: { type: String},
    name: { type: String },
    price: { type: String, required: true },
    shape: { type: String },
    type: { type: String, required: true },
    color: { type: String },
    details: { type: String },
    weight: { type: String, required: true },
    sellerName: { type: String, required: true },
    sellerContactNumber: { type: String, required: true },
    uid: { type: String, required: true },
    addID: { type: String, required: true }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
