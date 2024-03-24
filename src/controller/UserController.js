const User = require('../models/User');

class UserController {
    async registerUser(req, res) {
        try {
            const { username, email, password } = req.body;
            const user = await User.create({ username, email, password });
            res.status(201).json({ message: "User registered successfully", user });
        } catch (error) {
            console.error("Error registering user:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }
}

module.exports = new UserController();
