const express = require("express");
const router = express.Router();

const priceController = require("../controllers/priceController");

// Calculate final price
router.post("/calculate-price", priceController.calculatePrice);

module.exports = router;