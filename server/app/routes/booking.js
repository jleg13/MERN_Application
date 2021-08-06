const router = require('express').Router();
const bookingController = require("../controllers/bookingController");
const bookingValidator = require('../services/bookingValidation');

// Return all user bookings 
router.get('/', bookingController.read_bookinglist_list);

module.exports = router;