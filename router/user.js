const express = require("express");
const router = express.Router();
const user = require("../controller/user");

router.post("/register/user", user.registerUser);
router.post("/login/user", user.loginUser);

module.exports = router;