const registration = require('../models/Registration');
const RegistrationController = require("../controller/RegistrationController");
const express = require("express");

class RegistrationRoutes {
    registrationController = new RegistrationController();
    router = express.Router();

    constructor() {
        this.configRoutes();
    }

    configRoutes = () => {
        this.router.post('/registration', this.registrationController.registration);
        this.router.post('/login', this.registrationController.login);  //testing purpose
    };

    getRouter = () => {
        return this.router;
    };
}

module.exports = RegistrationRoutes;
