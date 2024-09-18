const express = require("express");
const {
  createOrder,
  getCheckoutSession,
} = require("../controllers/orderControllers");
const router = express.Router();
const { protect } = require("../controllers/authControllers");

router.post("/", protect, createOrder);
router.get("/checkout-session/:id", protect, getCheckoutSession);

module.exports = router;
