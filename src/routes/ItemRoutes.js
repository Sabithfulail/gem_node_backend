
const ItemController = require("../controller/ItemController");

    

const express = require("express");

class ItemRoutes{
    ItemController = new ItemController();
    router=express.Router();

    constructor(){
        this.configRoutes();
    };

    configRoutes = () => {
        this.router.get("/", this.ItemController.getAllItems);
        this.router.post("/saveItem", this.ItemController.saveItem);
        this.router.put("/updateItem/:itemId", this.ItemController.updateItem);
        this.router.delete("/deleteItem/:itemId", this.ItemController.deleteItem);
        this.router.get("/getItemById/:itemId", this.ItemController.getItemById);
    };

    getRouter = () => {
        return this.router;
    };
}

module.exports = ItemRoutes;
