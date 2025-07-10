const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers["authorization"];

    const authToken = authHeader && authHeader.split(" ")[1];

    if (!authToken) {
        return res.status(401).json({
            success: false,
            message: "Access Denied unAuthorise User",
        });
    }

    // decode the token
    try {
        const verifiedJwtToken = jwt.verify(authToken, process.env.JWT_SECRET);
        req.userInfo = verifiedJwtToken;
        next();
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }

    next();
};

module.exports = authMiddleware;
