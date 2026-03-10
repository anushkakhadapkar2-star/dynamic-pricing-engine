const express = require("express");
const router = express.Router();

const ruleController = require("../controllers/ruleController");

// Get rules for product
router.get("/:productId", ruleController.getRules);

// Create rule
router.post("/", ruleController.createRule);

// Update rule
router.put("/:id", ruleController.updateRule);

// Delete rule
router.delete("/:id", ruleController.deleteRule);

module.exports = router;