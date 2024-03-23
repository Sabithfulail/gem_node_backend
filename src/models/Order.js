const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orederSchema = new Schema({
    orderId : {type:String, require:true},
    CustomerId: {type:String, require:true},
    Total : {type:Number}
})

const Order = mongoose.model("Order",orederSchema);

module.exports = Order;