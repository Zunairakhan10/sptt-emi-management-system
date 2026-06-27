const express = require("express");
const router = express.Router();

const {
    testAdmin,
    registerAdmin,
    loginAdmin
} = require("../controllers/adminController");

router.post("/login", loginAdmin);
router.get("/test", testAdmin);
router.post("/register", registerAdmin);

module.exports = router;