const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemId : {type:String, require:true},
    itemName : {type:String},
    itemPackSize : {type:String},
    itemUnitPrice : {type:String},
    itemQuantityOnHand : {type:String},
})

const Item = mongoose.model("Item",itemSchema);

module.exports = Item;