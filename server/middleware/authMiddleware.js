const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    try {
        let token;

        // Check header
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            return res.status(401).json({ message: "No token" });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user
        req.user = decoded;

        next();
    } catch (err) {
        return res.status(403).json({ message: "Token invalid" });
    }
};

module.exports = protect;