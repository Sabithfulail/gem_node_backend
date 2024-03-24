const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    customerId: { type: String, required: true },
    customerName: { type: String, required: true },
    customerAddress: { type: String },
    customerEmail: { type: String, required: true, unique: true },
    customerContactNumber: { type: String, required: true },
    password: { type: String, required: true }
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
