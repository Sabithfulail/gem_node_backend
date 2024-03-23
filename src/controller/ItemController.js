const Item = require('../models/Item');

class ItemController{


    getAllItems = async(req, res) => {
        try {
            const itemList = await Item .find();
            console.log("Sent Item Data list");
            res.send(itemList);
        } catch (error) {
            return error
        }
    }

   
    saveItem = async(req, res) => {
        console.log("Save Item Req : ", req.body);
        const data = await Item.create(req.body);
        console.log(data);
        res.send("Item Saved Successfully...!");
        
    }

    updateItem  = async(req, res) => {
        const itemId = req.params.itemId;
        console.log('req item ID : ', itemId);
    
        const updateData = req.body;

        Item.findOneAndUpdate({ itemId: itemId}, updateData, { new: true })
            .then((updatedItem) => {
                if (!updatedItem) {
                    return res.status(404).json({
                        error: "Item not found"
                    });
                }
    
                return res.status(200).json({
                    success: "Update successfully",
                    item: updatedItem
                });
            })
            .catch((err) => {
                return res.status(500).json({
                    error: "An error occurred while updating the customer"
                });
            });
    }

    deleteItem  = async(req, res) => {
        const itemId = req.params.itemId;
        console.log("req delete item id : ", itemId);

        Item.findOneAndDelete({itemId: itemId})
            .then(() => {
                return res.status(200).json({
                    success: "Delete successfully"
                });
            })
            .catch(err => {
                return res.status(400).json({ error: err });
            });
    }

    getItemById = async(req, res) => {
        try {
            const itemId = req.params.itemId;
            const item = await Item.findOne({itemId: itemId});
            console.log(itemId+"Sent Customer Data"+item);
            if (item == null){
                 return res.status(200).json( null );
            }
            res.send(item);
        } catch (error) {
            return error
        }
    }

}


module.exports = ItemController;