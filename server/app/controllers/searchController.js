// const { validationResult } = require("express-validator");
// const Restaurant = require("../models/Restaurant");
const Restaurant = require("../models/Restaurant");

exports.read_restaurantlist_list = async (req, res) => {
  Restaurant.find()
    .then((restuarants) => {
      res.status(200).json({
        confirmation: "success",
        data: restuarants,
      });
    })
    .catch((err) => {
      res.status(400).json({
        confirmation: "fail",
        message: err.message,
      });
    });
};

exports.read_restaurantlist_items = (req, res) => {
  res.status(200).json({ message: "Hello World!" });
};

exports.createRestaurant = async (req, res) => {
  let restaurant = new Restaurant({
    id: req.body.id,
    name: req.body.name,
    cuisine: req.body.cuisine,
    info: req.body.info,
    image: req.body.image
  });
  let output_restaurant = await restaurant.save();
  if (output_restaurant) {
    return res.status(201).json(output_restaurant);
  }
  // In case, something went wrong
  res.status(400).json({ errors: [err] });
};
