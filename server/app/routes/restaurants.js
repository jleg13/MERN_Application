const router = require('express').Router();
const restaurantController = require("../controllers/restaurantController");
const restaurantValidator = require('../services/restaurantValidation');

// Return all details of a restaurant by ID
router.get('/:id', restaurantValidator.validateRestaurantId, restaurantController.readRestaurant);
// Create a new restaurant
router.post("/", restaurantValidator.validaterestaurantsController.createRestaurant)

module.exports = router;