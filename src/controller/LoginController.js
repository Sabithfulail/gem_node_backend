const Login = require('../models/Login');

class LoginController {
    async login(req, res) {
        try {
            const { email, password } = req.body;

            console.log('Received login request:', email, password);

            // Check if user exists
            const user = await Login.findOne({ email });
            if (!user) {
                console.log('User not found');
                return res.status(400).json({ message: 'Invalid email or password' });
            }

            // Check password
            // Uncomment below lines if you have password hashing enabled
            // const isPasswordValid = await bcrypt.compare(password, user.password);
            // if (!isPasswordValid) {
            //     console.log('Invalid password');
            //     return res.status(400).json({ message: 'Invalid email or password' });
            // }

            console.log('User logged in successfully');
            res.send("Customer Logged in Successfully!");
        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

module.exports = LoginController;
