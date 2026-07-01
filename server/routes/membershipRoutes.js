const express = require("express");
const router = express.Router();

const {
    getAllMemberships,
    getMembershipById,
    createMembership,
    updateMembership,
    deleteMembership
} = require("../controllers/membershipController");

router.get("/", getAllMemberships);
router.get("/:id", getMembershipById);
router.post("/", createMembership);
router.put("/:id", updateMembership);
router.delete("/:id", deleteMembership);

module.exports = router;
