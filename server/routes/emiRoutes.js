const express = require("express");
const router = express.Router();

const {
  getAllEmis,
  getEmiById,
  createEmi,
  updateEmi,
  deleteEmi,
} = require("../controllers/emiController");

router.get("/", getAllEmis);
router.get("/:id", getEmiById);
router.post("/", createEmi);
router.put("/:id", updateEmi);
router.delete("/:id", deleteEmi);

module.exports = router;
