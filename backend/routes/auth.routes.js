const express = require("express");
const router = express.Router();

const User = require("../controllers/auth.controller");

//router.get("/", auth.getAuths);

router.post("/register", User.createUser);

router.post("/login", User.loginUser);


module.exports = router;