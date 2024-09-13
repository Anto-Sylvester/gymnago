const jwt = require("jsonwebtoken");
const config = require("../config");

const authentication = async (req, res, next) => {
    //   console.log(req.headers);
    try {
        const token = req.headers["access-token"];
        if (!token) {
            res.status(498).json({ message: "Authentication failed", status: false });
        } else {
            const decode = jwt.verify(token, config.JWT_TOKEN_KEY, null);
            req.data = decode;
            next();
        }
    } catch (error) {
        res.status(498).json({ message: "Authentication failed", status: false });
    }
};

module.exports = authentication;
