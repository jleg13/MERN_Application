const router = require('express').Router();
const searchController = require("../controllers/searchController");
const searchValidator = require('../services/searchValidation');

// Return all resuarants route
router.get('/', searchController.read_restaurantlist_list);
// Search restaurants by keyword
router.get('/:keyword', searchValidator.validateSearch, searchController.read_restaurantlist_items);
// Search restaurants by keyword, Date, Time, Guests Number
router.get('/:keyword/:date/:time/:guests', searchValidator.validateSearch, searchController.read_restaurantlist_items);
router.post("/", searchController.createRestaurant)

module.exports = router;
