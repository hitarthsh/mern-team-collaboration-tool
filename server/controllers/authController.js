const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields required" });
        }

        const hashed = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashed,
        });

        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// LOGIN
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // ❗ Check body
        if (!email || !password) {
            return res.status(400).json({ message: "Email & password required" });
        }

        // ❗ Check user exists
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        // ❗ Check password
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // ❗ Generate token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.json({ token });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};