const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    customerId : {type:String, require:true},
    customerName : {type:String, require:true},
    customerAddress : {type:String},
    customerEmail : {type:String},
    customerContactNumber : {type:String},
})

const Customer = mongoose.model("Customer",customerSchema);

module.exports = Customer;