const Registration = require('../models/Registration');

class RegistrationController {
    async register(req, res) {
        try {
            const { customerId, customerName, customerAddress, customerEmail, customerContactNumber, password } = req.body;

            // Check if user with the same email already exists
            const existingUser = await Registration.findOne({ customerEmail });
            if (existingUser) {
                return res.status(400).json({ message: 'Email already exists' });
            }

            // Create new user
            const newUser = new Registration({
                customerId,
                customerName,
                customerAddress,
                customerEmail,
                customerContactNumber,
                password // This is the raw password
            });
            await newUser.save();

            // Respond with success message
            res.json({ message: 'Customer registered successfully!' });
        } catch (error) {
            console.error('Registration error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

module.exports = RegistrationController;
