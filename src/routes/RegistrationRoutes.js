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
    };

    getRouter = () => {
        return this.router;
    };
}

module.exports = RegistrationRoutes;
