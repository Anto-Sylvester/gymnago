const User = require("../module/user");
const jwt = require("jsonwebtoken");
const config = require("../config");

const registerUser = async (req, res) => {
    try {
        let { name, password } = req.body;
        //custom validation
        if (!name || !password) {
            res.status(400).json({ Message: "Enter all data", status: false });
        } else {
            const user = await User.findOne({ name });
            if (user) {
                res.status(409).json({ Meesage: "User already exist please login", status: false });
            } else {
                const response = await User(
                    {
                        name,
                        password
                    }
                ).save();
                if (!response) {
                    res.status(500).json({ Message: "user not registered", status: false });
                } else {
                    res.status(200).json({ Message: "User registered successfully", status: true, login: true });
                }


            }
        }
    } catch (error) {
        res.status(500).json({ Message: "Error occured", status: false, error })
    }
}

// login user
const loginUser = async (req, res, next) => {
    try {
        let { name, password } = req.body;
        if (!name || !password) {
            res.status(400).json({ Message: "Enter all data", status: false });
        } else {
            password = password.trim();
            const check = await User.findOne({ name });
            if (!check) {
                res.json({ message: "User not present please register", status: false });
            } else {
                if (name === check.name && password === check.password) {
                    let token = await jwt.sign(
                        {
                            id: check._id,
                        },
                        config.JWT_TOKEN_KEY
                    );
                    res.status(200).json({
                        message: "Login successful",
                        status: true,
                        token,
                    });
                } else {
                    res.json({ message: "Login failed", status: false });
                }
            }
        }
    } catch (error) {
        res.json({ message: error.message, status: false });
    }
};

module.exports = {
    registerUser,
    loginUser
}