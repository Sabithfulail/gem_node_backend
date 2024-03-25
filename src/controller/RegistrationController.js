const Registration = require('../models/Registration');

class RegistrationController {
    registration = async(req, res) => {
        try {
            console.log("in to the RegistrationController");
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

login = async (req, res) => {
    try {
        const { customerEmail, password } = req.body;

        // Check if email or password is null or empty
        if (!customerEmail) {
            console.log('Email is null or empty');
            return res.status(400).json({ message: 'Email cannot be null' });
        }

        if (!password) {
            console.log('Password is null or empty');
            return res.status(400).json({ message: 'Password cannot be null' });
        }

        console.log('Received login request:', customerEmail, password);

        // Check mail
        const user = await Registration.findOne({ customerEmail });
        if (!user) {
            console.log('User not found');
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Check password
        if (user.password !== password) {
            console.log('Invalid password');
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        console.log('User logged in successfully');
        res.send("Customer Logged in Successfully!");
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

}

module.exports = RegistrationController;
