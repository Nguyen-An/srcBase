const express = require("express");
const router = express.Router();

// Import controllers
const AccountController = require("../controllers/account.controller")

router.get("/account", AccountController.getLissAcountController)

module.exports = router