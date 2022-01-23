const express = require("express");

const router = express.Router();

const TransactionController = require("../controller/Transaction");

router.post("/create-payment",TransactionController.createPaymentLink);
router.get("/success-transaction",TransactionController.successTransaction);

module.exports = router;