let Post = require('../models/Post');

const PostController = require("../controller/PostController");

const express = require("express");

class PostRoutes{
    postController = new PostController();
    router=express.Router();

    constructor(){
        this.configRoutes();
    };''

    configRoutes = () => {
        this.router.get("/", this.postController.getAllPosts);
        this.router.post("/savePosts", this.postController.savePosts);
        this.router.put("/updatePost/:uId", this.customerController.updateCustomer);
        this.router.delete("/deletePost/:uId", this.customerController.deleteCustomer);
        this.router.get("/getPostById/:uId", this.customerController.getCustomerById);
    };

    getRouter = () => {
        return this.router;
    };
}

module.exports = CustomerRoutes;
