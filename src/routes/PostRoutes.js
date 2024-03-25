const express = require("express");
const PostController = require("../controller/PostController");

class PostRoutes {
    postController = new PostController();
    router = express.Router();

    constructor() {
        this.configRoutes();
    }

    configRoutes = () => {
        this.router.get("/", this.postController.getAllPosts);
        this.router.post("/savePosts", this.postController.savePosts);
        this.router.put("/updatePost/:uId", this.postController.updatePost);
        this.router.delete("/deletePost/:uId", this.postController.deletePost);
        this.router.get("/getPostById/:uId", this.postController.getPostById);
    };

    getRouter = () => {
        return this.router;
    };
}

module.exports = PostRoutes;
