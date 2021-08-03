const express = require('express');
const router = express.Router();
const searchController = require("../controllers/search-controller");
const searchValidator = require("../services/search-services");

// Return all resuarants route
router.get("/", searchController.read_restaurantlist_list);
// Search resuarants route
router.get('/:id', searchValidator.validate searchController.read_restaurantlist_item);

module.exports = router;