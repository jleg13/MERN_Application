// const { validationResult } = require("express-validator");
// const restaurantModel = require("../models/restaurant");

exports.read_userlist_user = (req, res) => {
  res.status(200).json(req.params);
};

