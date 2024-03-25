const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    imageGem: { type: String, required: true },
    imageCertificate: { type: String, required: true },
    name: { type: String },
    price: { type: String, required: true, unique: true },
    shape: { type: String, required: true },
    type: { type: String, required: true },
    color: { type: String, required: true },
    details: { type: String, required: true },
    weight: { type: String, required: true },
    sellerName: { type: String, required: true },
    sellerContactNumber: { type: String, required: true },
    uid: { type: String, required: true },
    addID: { type: String, required: true }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
