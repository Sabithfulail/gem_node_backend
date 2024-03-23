let Customer = require('../models/Customer');

const CustomerController = require("../controller/CustomerController");

    

const express = require("express");

class CustomerRoutes{
    customerController = new CustomerController();
    router=express.Router();

    constructor(){
        this.configRoutes();
    };

    configRoutes = () => {
        this.router.get("/", this.customerController.getAllCustomers);
        this.router.post("/saveCustomer", this.customerController.saveCustomer);
        this.router.put("/updateCustomer/:customerID", this.customerController.updateCustomer);
        this.router.delete("/deleteCustomer/:customerId", this.customerController.deleteCustomer);
        this.router.get("/getCustomerById/:customerId", this.customerController.getCustomerById);
    };

    getRouter = () => {
        return this.router;
    };
}

module.exports = CustomerRoutes;
