let Order = require('../models/Order');

const OrderController = require("../controller/OrderController");

const express = require("express");

class OrderRoutes{
    OrderController = new OrderController();
    router=express.Router();

    constructor(){
        this.configRoutes();
    };

    configRoutes = () => {
      
        this.router.post("/saveOrder", this.OrderController.saveOrder);
        
    };

    getRouter = () => {
        return this.router;
    };
}

module.exports = OrderRoutes;
