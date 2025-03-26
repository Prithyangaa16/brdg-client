const express = require("express");
const router = express.Router();
const googleSheetsController = require('../controllers/googleSheetsController.js');

// Define Routes
router.get("/waitlistData", googleSheetsController.getWaitlistData);
router.get("/contactData", googleSheetsController.getContactData);
router.post("/addToWaitlist", googleSheetsController.addToWaitlist);
router.post("/addToContact", googleSheetsController.addToContact);

module.exports = router;