const Login = require('../models/Login');
const LoginController = require("../controller/LoginController");
const express = require("express");

class LoginRoutes {
    loginController = new LoginController();
    router = express.Router();

    constructor() {
        this.configRoutes();
    }

    configRoutes = () => {
        this.router.post('/login', this.loginController.login);
    };

    getRouter = () => {
        return this.router;
    };
}

module.exports = LoginRoutes;
