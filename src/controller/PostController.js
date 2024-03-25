const Post = require('../models/Post');
const fs = require('fs');

class PostController {
    getAllPosts = async(req, res) => {
        try {
            const postList = await Post.find();
            console.log("Sent Post Data list");
            res.send(postList);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    savePosts = async (req, res) => {
        try {
            console.log("in to the RegistrationController");
    
            // Assuming 'imageGem' and 'imageCertificate' are the names of the file inputs in your form
            const gemImage = req.files['imageGem'][0]; // Accessing the uploaded gem image
            const certificateImage = req.files['imageCertificate'][0]; // Accessing the uploaded certificate image
    
            // Convert images to Base64 strings
            const gemImageString = fs.readFileSync(gemImage.path, { encoding: 'base64' });
            const certificateImageString = fs.readFileSync(certificateImage.path, { encoding: 'base64' });
    
            // Other form fields
            const { name, price, shape, type, color, details, weight, sellerName, sellerContactNumber, uid, addID } = req.body;
    
            // Save data to MongoDB
            const data = await Post.create({
                imageGem: gemImageString,
                imageCertificate: certificateImageString,
                name,
                price,
                shape,
                type,
                color,
                details,
                weight,
                sellerName,
                sellerContactNumber,
                uid,
                addID
            });

            res.status(200).json({ message: 'Post saved successfully', data });
        } catch (error) {
            console.error('Registration error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }; 

    getPostById = async(req, res) => {
        try {
            const postId = req.params.uid;
            const post = await Post.findOne({ uid: postId });
            console.log(postId + " Sent Post Data " + post);
            if (!post) {
                return res.status(404).json({ message: 'Post not found' });
            }
            res.send(post);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    updatePost = async(req, res) => {
        const postId = req.params.uId;
        console.log('req post ID : ', postId);
    
        const updateData = req.body;

        Post.findOneAndUpdate({ uid: postId }, updateData, { new: true })
            .then((updatedPost) => {
                if (!updatedPost) {
                    return res.status(404).json({ message: "Post not found" });
                }
    
                return res.status(200).json({ message: "Update successful", post: updatedPost });
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ message: 'Internal server error' });
            });
    }

    deletePost = async(req, res) => {
        const postId = req.params.uId;
        console.log("req delete post ID : ", postId);

        Post.findOneAndDelete({ uid: postId })
            .then(() => {
                return res.status(200).json({ message: "Delete successful" });
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ message: 'Internal server error' });
            });
    }
}

module.exports = PostController;
