const Post = require('../models/Post');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Configure destination folder as needed

class PostController {

    getAllPosts = async(req, res) => {
        try {
            const postList = await Post.find();
            console.log("Sent Post Data list");
            res.send(postList);
        } catch (error) {
            return error
        }
    
    }
    


    // Assuming you have configured multer for handling file uploads

    
    postPosts = async (req, res) => {
        try {
            console.log("in to the RegistrationController");
    
            // Assuming 'imageGem' and 'imageCertificate' are the names of the file inputs in your form
            const gemImage = req.files['imageGem'][0]; // Accessing the uploaded gem image
            const certificateImage = req.files['imageCertificate'][0]; // Accessing the uploaded certificate image
    
            // Other form fields
            const { name, price, shape, type, color, details, weight, sellerName, sellerContactNumber, uid, addID } = req.body;
    
            // You can access file information like filename, mimetype, path, etc. from gemImage and certificateImage
    
            // Handle the file data as needed, for example, you might save them to a database or serve them directly
    
            res.status(200).json({ message: 'Images uploaded successfully' });
        } catch (error) {
            console.error('Registration error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    };
    
    // Assuming 'postPosts' route is configured to accept POST requests
    // Example: router.post('/posts', upload.fields([{ name: 'imageGem', maxCount: 1 }, { name: 'imageCertificate', maxCount: 1 }]), postPosts);
    

    getPostById = async(req, res) => {
        try {
            const postId = req.params.uid;
            const post = await Post.findOne({postId: uid});
            console.log(postId+" Sent Post Data"+ post);
            if (post == null){
                 return res.status(200).json( null );
            }
            res.send(post);
        } catch (error) {
            return error
        }
    }
}