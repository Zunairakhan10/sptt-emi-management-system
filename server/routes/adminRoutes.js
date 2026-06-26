const express = require("express");
const router = express.Router();

const {
    testAdmin,
    registerAdmin
} = require("../controllers/adminController");

router.get("/test", testAdmin);
router.post("/register", registerAdmin);

module.exports = router;