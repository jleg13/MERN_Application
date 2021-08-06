// const { validationResult } = require("express-validator");
// const restaurantModel = require("../models/restaurant");

exports.read_restaurantlist_list = (req, res) => {
  res.status(200).json({ message: "Hello World!" });
};

exports.read_restaurantlist_items = (req, res) => {
  res.status(200).json({ message: "Hello World!" });
};
